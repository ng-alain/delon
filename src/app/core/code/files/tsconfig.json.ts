export default {
  compileOnSave: false,
  compilerOptions: {
    baseUrl: './',
    outDir: './dist/out-tsc',
    forceConsistentCasingInFileNames: true,
    strict: true,
    noImplicitOverride: true,
    noPropertyAccessFromIndexSignature: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
    sourceMap: true,
    declaration: false,
    downlevelIteration: true,
    experimentalDecorators: true,
    moduleResolution: 'node',
    importHelpers: true,
    target: 'es2017',
    module: 'es2020',
    lib: ['es2020', 'dom'],
    allowSyntheticDefaultImports: true
  },
  angularCompilerOptions: {
    enableIvy: true,
    enableI18nLegacyMessageIdFormat: false,
    strictInjectionParameters: true,
    strictInputAccessModifiers: true,
    strictTemplates: true
  }
};
