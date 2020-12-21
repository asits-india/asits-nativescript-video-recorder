# NativeScript ASITS VIDEO RECORDER Plugin

A dead-simple plugin to use the camera functionalities of your NativeScript app.

## Installation

```
npm install nativescript-asitsvideorecorder
```

## Usage For Angular


``` TypeScript
registerElement("AsitsVideoRecorder", () => require("nativescript-asitsvideorecorder").AsitsVideoRecorder);
```

``` Html
<AsitsVideoRecorder height="250" debug="true"
                            galleryPickerMode="single" showFlashIcon="true" showToggleIcon="true"
                            showCaptureIcon="true" showGalleryIcon="true" confirmSaveText="CONFIRM!" confirmRetakeText="RETAKE!" (loaded)="camLoaded($event)"
                            (toggleCameraEvent)="toggleCameraEvent($event)" (photoCapturedEvent)="photoCapturedEvent($event)"
                            (imagesSelectedEvent)="imagesSelectedEvent($event)">
        </AsitsVideoRecorder>
```

## License

MIT
