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
      baseUrl:'/stencil-github-app/',  //comment this for local development This ensures compatibility between local and production builds.
   // baseUrl: 'https://YOUR_GITHUB_USERNAME.github.io/stencil-github-app/',  ✅ Add your repo URL
     //prerenderConfig: './prerender.config.ts'
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
