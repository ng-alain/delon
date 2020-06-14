export default {
  apps: [
    {
      root: 'src',
      outDir: 'dist',
      assets: ['assets'],
      index: 'index.html',
      main: 'main.ts',
      polyfills: 'polyfills.ts',
      prefix: 'app',
      styles: ['styles.css'],
      scripts: [],
      environmentSource: 'environments/environment.ts',
      environments: {
        dev: 'environments/environment.ts',
        prod: 'environments/environment.prod.ts',
      },
    },
  ],
};
