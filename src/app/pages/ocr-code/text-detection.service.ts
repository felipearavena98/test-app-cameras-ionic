import { Injectable } from '@angular/core';
import Tesseract from 'tesseract.js';

@Injectable({
    providedIn: 'root'
})
export class TextDetectionService {

    constructor() { }

    async detectText(imageUrl: string): Promise<string> {
        try {
            const lang = 'spa';
            const workerPath = './text-detection.worker.js';
            const result = await Tesseract.recognize(imageUrl, `${lang},${workerPath}`);
            return result.data.text;
        } catch (error) {
            console.error(error);
            return '';
        }
    }
}