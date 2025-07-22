export default {
  $schema: './node_modules/@angular/cli/lib/config/schema.json',
  cli: {
    analytics: '1e1de97b-a744-405a-8b5a-0397bb3d01ce'
  },
  newProjectRoot: 'projects',
  projects: {
    demo: {
      architect: {
        build: {
          builder: '@angular/build:application',
          configurations: {
            development: {
              extractLicenses: false,
              namedChunks: true,
              optimization: false,
              sourceMap: true
            },
            production: {
              aot: true,
              extractLicenses: true,
              namedChunks: false,
              optimization: true,
              outputHashing: 'all',
              sourceMap: false
            }
          },
          options: {
            browser: 'src/main.ts',
            polyfills: ['zone.js'],
            assets: [],
            index: 'src/index.html',
            outputPath: 'dist/demo',
            scripts: [],
            inlineStyleLanguage: 'less',
            styles: ['src/styles.css'],
            tsConfig: 'tsconfig.json'
          }
        },
        serve: {
          builder: '@angular/build:dev-server',
          configurations: {
            development: {
              buildTarget: '::development'
            },
            production: {
              buildTarget: '::production'
            }
          },
          defaultConfiguration: 'development'
        }
      },
      prefix: 'app',
      projectType: 'application',
      root: '',
      schematics: {},
      sourceRoot: 'src'
    }
  },
  version: 1
};
