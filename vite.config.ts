import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Google Meet Video Hider',
  version: '1.0',
  description: 'Hide video of participants during screen sharing in Google Meet',
  permissions: ['https://meet.google.com/*', 'storage'],
  action: {
    default_popup: 'popup.html',
    // default_icon: {
    //   '16': 'icons/icon16.png',
    //   '48': 'icons/icon48.png',
    //   '128': 'icons/icon128.png',
    // },
  },
  background: {
    service_worker: 'src/background/index.ts',
  },
  content_scripts: [
    {
      matches: ['https://meet.google.com/*'],
      js: ['src/content/index.tsx'],
    },
  ],
  // icons: {
  //   '16': 'icons/icon16.png',
  //   '48': 'icons/icon48.png',
  //   '128': 'icons/icon128.png',
  // },
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
