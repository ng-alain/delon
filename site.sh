#!/usr/bin/env bash

set -u -e -o pipefail

readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}

BUILD=false
DEPLOY=false
for ARG in "$@"; do
  case "$ARG" in
    -d)
      DEPLOY=true
      ;;
    -b)
      BUILD=true
      ;;
  esac
done

echo 'BUILD(-b):' $BUILD ', DEPLOY(-d):' $DEPLOY

if [[ ${BUILD} == true ]]; then

    echo 'Generate site...'
    node scripts/site/main init

    echo 'Generate site color less...'
    rm -rf .tmp
    cp -r packages .tmp

    sed -i "s/@import '..\//\/\/ @import/g" `grep @import\ \'../ -rl .tmp`
    sed -i "s/~ng-zorro-antd/node_modules\/ng-zorro-antd/g" `grep ~ng-zorro-antd -rl .tmp`

    node ./scripts/site/generate-color-less.js

    rm -rf .tmp

    echo 'build...'
    $(npm bin)/ng build --prod --build-optimizer --base-href /
    # github pages
    # $(npm bin)/ng build --prod --build-optimizer --base-href /delon/
fi

if [[ ${DEPLOY} == true ]]; then

    echo 'copy index.html > 404.html'
    cp -f src/dist/index.html src/dist/404.html

    # echo 'copy CNAME'
    # cp -f src/CNAME src/dist/CNAME

    echo 'deploy by gh-pages'
    $(npm bin)/gh-pages-clean
    $(npm bin)/gh-pages -d src/dist

fi

echo 'FINISHED!'
