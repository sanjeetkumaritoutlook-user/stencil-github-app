import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-github-app',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'https://github.com/sanjeetkumaritoutlook-user/stencil-github-app/', // ✅ Add your repo URL
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
