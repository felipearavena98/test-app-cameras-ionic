import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myQrAPP',
  webDir: 'www',
  bundledWebRuntime: false,
  "plugins": {
    "@capacitor-community/camera-preview": {}
  }
};

export default config;
