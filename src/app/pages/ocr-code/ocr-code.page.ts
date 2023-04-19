import { Component, ElementRef, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { TextDetectionService } from './text-detection.service';
import Tesseract from 'tesseract.js';

@Component({
  selector: 'app-ocr-code',
  templateUrl: './ocr-code.page.html',
  styleUrls: ['./ocr-code.page.scss'],
})
export class OcrCodePage {
  @ViewChild('video', { static: false }) video: ElementRef | undefined;
  @ViewChild('canvas', { static: false }) canvas: ElementRef | undefined;

  text: string | undefined;
  cameraOn: boolean = false;

  constructor(private textDetectionService: TextDetectionService) { }

  async startCamera() {
    this.cameraOn = true;
    const video = this.video!.nativeElement;
    const canvas = this.canvas!.nativeElement;
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
    video.play();
    const context = canvas.getContext('2d');
    const timerId = setInterval(async () => {
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      canvas.width = videoWidth;
      canvas.height = videoHeight;
      context.drawImage(video, 0, 0, videoWidth, videoHeight);
      const imageUrl = canvas.toDataURL('image/jpeg');
      this.text = await this.textDetectionService.detectText(imageUrl);
    }, 1000);
  }

  stopCamera() {
    this.cameraOn = false;
    const video = this.video!.nativeElement;
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track: { stop: () => any; }) => track.stop());
  }
}