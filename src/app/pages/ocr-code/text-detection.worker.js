import Tesseract from 'tesseract.js';

self.addEventListener('message', async (event) => {
    const { imageUrl, lang } = event.data;
    const result = await Tesseract.recognize(imageUrl, { lang: lang });
    self.postMessage(result.data.text);
});