export default {
  $schema: './node_modules/@angular/cli/lib/config/schema.json',
  version: 1,
  newProjectRoot: 'projects',
  projects: {
    demo: {
      root: '',
      sourceRoot: 'src',
      projectType: 'application',
      prefix: 'app',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:browser',
          options: {
            outputPath: 'dist/demo',
            index: 'src/index.html',
            main: 'src/main.ts',
            polyfills: 'src/polyfills.ts',
            tsConfig: 'src/tsconfig.app.json',
            assets: ['src/favicon.ico', 'src/assets'],
            styles: ['src/styles.css'],
          },
          configurations: {
            production: {
              optimization: true,
              outputHashing: 'all',
              sourceMap: false,
              extractCss: true,
              namedChunks: false,
              aot: true,
              extractLicenses: true,
              vendorChunk: false,
              buildOptimizer: true,
            },
          },
        },
        serve: {
          builder: '@angular-devkit/build-angular:dev-server',
          options: {
            browserTarget: 'demo:build',
          },
        },
      },
    },
  },
  defaultProject: 'demo',
};
