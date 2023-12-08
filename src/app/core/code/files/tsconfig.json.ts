export default {
  compileOnSave: false,
  compilerOptions: {
    outDir: './dist/app',
    forceConsistentCasingInFileNames: true,
    strict: true,
    noImplicitOverride: true,
    noPropertyAccessFromIndexSignature: false,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
    esModuleInterop: true,
    sourceMap: true,
    declaration: false,
    downlevelIteration: true,
    experimentalDecorators: true,
    moduleResolution: 'node',
    importHelpers: true,
    target: 'ES2015',
    module: 'ES2022',
    useDefineForClassFields: false,
    lib: ['ES2022', 'dom'],
    types: []
  },
  files: ['src/main.ts'],
  include: ['src/**/*.d.ts'],
  angularCompilerOptions: {
    enableI18nLegacyMessageIdFormat: false,
    strictInjectionParameters: true,
    strictInputAccessModifiers: true,
    strictTemplates: true
  }
};
