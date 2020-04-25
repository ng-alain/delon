export default `
{
  "apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": ["assets", "favicon.ico"],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "prefix": "app",
      "styles": [
        "node_modules/@delon/theme/styles/ng-alain.css",
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ]
}
`;
