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

    sed -e "s/~ng-zorro-antd/..\/..\/..\/node_modules\/ng-zorro-antd/g" packages/theme/styles/default.less > .tmp/theme/styles/default.less
    sed -e "s/~ng-zorro-antd/..\/..\/..\/..\/..\/node_modules\/ng-zorro-antd/g" packages/theme/styles/app/mixins/index.less > .tmp/theme/styles/app/mixins/index.less

    node ./scripts/site/generate-color-less.js

    rm -rf .tmp

    echo 'build...'
    $(npm bin)/ng build --app site --prod --build-optimizer --bh /
    # github pages
    # $(npm bin)/ng build --app site --prod --build-optimizer --bh /delon/
fi

if [[ ${DEPLOY} == true ]]; then

    echo 'copy index.html > 404.html'
    cp -f site/dist/index.html site/dist/404.html

    # echo 'copy CNAME'
    # cp -f site/CNAME site/dist/CNAME

    echo 'deploy by gh-pages'
    $(npm bin)/gh-pages-clean
    $(npm bin)/gh-pages -d site/dist

fi

echo 'FINISHED!'
