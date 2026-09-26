import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true, // jasmine 每个 spec 后自动还原 spy，vitest 默认不还原
    environment: 'node',
    // vitest 的 root 相对 cwd（= 仓库根，见 scripts/ci/build-schematics.sh），而非相对本文件
    root: 'dist/schematics-test',
    include: ['**/*.spec.js']
  }
});
