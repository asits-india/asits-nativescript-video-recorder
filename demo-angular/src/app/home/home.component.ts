import {Component, NgZone, OnInit} from "@angular/core";
import {ImageAsset, ImageSource} from "@nativescript/core";
import {AsitsVideoRecorder} from "nativescript-asitsvideorecorder";

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
    moduleId: module.id
})
export class HomeComponent implements OnInit {
    private cam: AsitsVideoRecorder;
    public imageSource: ImageSource;
    loadPreview: boolean;

    constructor(private zone: NgZone) {
        setTimeout(x => {
            this.loadPreview = true;
        });
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {}

    public camLoaded(e: any): void {
        console.log('***** cam loaded *****');
        this.cam = e.object as AsitsVideoRecorder;

        const flashMode = this.cam.getFlashMode();

        // Turn flash on at startup
        if (flashMode === 'off') {
            this.cam.toggleFlash();
        }

        this.cam.requestCameraPermissions().then();
        this.cam.requestVideoRecordingPermissions().then();
        this.cam.requestAudioPermissions().then();
        this.cam.requestStoragePermissions().then();

        // TEST THE ICONS SHOWING/HIDING
        // this.cameraPlus.showCaptureIcon = true;
        // this.cameraPlus.showFlashIcon = true;
        // this.cameraPlus.showGalleryIcon = false;
        // this.cameraPlus.showToggleIcon = false;
    }

    public imagesSelectedEvent(e: any): void {
        console.log('IMAGES SELECTED EVENT!!!');
        this.loadImage((e.data as ImageAsset[])[0]);
    }

    public photoCapturedEvent(e: any): void {
        console.log('PHOTO CAPTURED EVENT!!!');
        this.loadImage(e.data as ImageAsset);
    }

    public toggleCameraEvent(e: any): void {
        console.log('camera toggled');
    }

    public recordDemoVideo(): void {
        try {
            console.log(`*** start recording ***`);
            this.cam.record({ saveToGallery: true }).then();
        } catch (err) {
            console.log(err);
        }
    }

    public stopRecordingDemoVideo(): void {
        try {
            console.log(`*** stop recording ***`);
            this.cam.stop();
            console.log(`*** after this.cam.stop() ***`);
        } catch (err) {
            console.log(err);
        }
    }

    public toggleFlashOnCam(): void {
        this.cam.toggleFlash();
    }

    public toggleShowingFlashIcon(): void {
        console.log(`showFlashIcon = ${this.cam.showFlashIcon}`);
        this.cam.showFlashIcon = !this.cam.showFlashIcon;
    }

    public toggleTheCamera(): void {
        this.cam.toggleCamera();
    }

    public openCamPlusLibrary(): void {
        this.cam.chooseFromLibrary();
    }

    public takePicFromCam(): void {
        this.cam.takePicture({ saveToGallery: true });
    }

    private loadImage(imageAsset: ImageAsset): void {
        if (imageAsset) {
            ImageSource.fromAsset(imageAsset).then(
                imgSrc => {
                    if (imgSrc) {
                        this.zone.run(() => {
                            this.imageSource = imgSrc;
                        });
                    } else {
                        this.imageSource = null;
                        alert('Image source is bad.');
                    }
                },
                err => {
                    this.imageSource = null;
                    console.log('Error getting image source: ');
                    console.error(err);
                    alert('Error getting image source from asset');
                }
            );
        } else {
            console.log('Image Asset was null');
            alert('Image Asset was null');
            this.imageSource = null;
        }
    }
}
