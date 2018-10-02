#!/usr/bin/env bash

set -u -e -o pipefail

cd $(dirname $0)/../..

BUILD=false
COLOR=false
DEPLOY=false
for ARG in "$@"; do
  case "$ARG" in
    -d)
      DEPLOY=true
      ;;
    -c)
      COLOR=true
      ;;
    -b)
      BUILD=true
      ;;
  esac
done

#######################################
# update version references
# Arguments:
#   param1 - package.json path
# Returns:
#   None
#######################################
updateVersionReferences() {
  PACKAGE_DIR="$1"
  (
    echo "======    VERSION: Updating version references in ${PACKAGE_DIR}"
    sed -i "s/\"version\":[ ]*\"[^\"]*\"/\"version\": \"${VERSION}\"/g" ${PACKAGE_DIR}
    PACKAGE_NAMES=(abc acl auth chart cache mock form theme util)
    for name in ${PACKAGE_NAMES[@]}
    do
      sed -i "s/\"@delon\/${name}\":[ ]*\"[^\"]*\"/\"@delon\/${name}\": \"^${VERSION}\"/g" ${PACKAGE_DIR}
    done
    sed -i "s/\"ng-alain\":[ ]*\"[^\"]*\"/\"ng-alain\": \"^${VERSION}\"/g" ${PACKAGE_DIR}
  )
}

VERSION=$(node -p "require('./package.json').version")
echo "Version ${VERSION}"

PWD=`pwd`
SCAFFOLD_DIR=${PWD}/ng-alain
ROOT_DIR=${PWD}/dist/scaffold
DIST_DIR=${ROOT_DIR}/dist

NG=${PWD}/node_modules/.bin/ng
GHPAGES=${PWD}/node_modules/.bin/gh-pages

if [[ ${COLOR} == true ]]; then
  rm -rf .tmp
  cp -r packages .tmp

  sed -i "s/@import '..\//\/\/ @import/g" `grep @import\ \'../ -rl .tmp`
  sed -i "s/~ng-zorro-antd/..\/..\/..\/node_modules\/ng-zorro-antd/g" `grep ~ng-zorro-antd -rl .tmp`

  node ./scripts/scaffold/alain-default-color-less.js

  rm -rf .tmp
fi

if [[ ${BUILD} == true ]]; then

  echo '===== copy...'

  rm -rf ${ROOT_DIR}
  mkdir -p ${ROOT_DIR}
  rsync -a --exclude "node_modules" --exclude "dist" --exclude "package-lock.json" --exclude "yarn.lock" ${SCAFFOLD_DIR}/ ${ROOT_DIR}

  cd ${ROOT_DIR}
  updateVersionReferences ${ROOT_DIR}/package.json

  echo '===== need mock'
  sed -i "s/const MOCK_MODULES = !environment.production/const MOCK_MODULES = true/g" ${ROOT_DIR}/src/app/delon.module.ts
  sed -i "s/if (!environment.production)/if (true)/g" ${ROOT_DIR}/src/app/layout/default/default.component.ts

  yarn

  echo '===== build...'
  ng build --prod --build-optimizer --base-href /ng-alain/

  echo 'copy index.html > 404.html'
  cp -f ${DIST_DIR}/index.html ${DIST_DIR}/404.html
fi

if [[ ${DEPLOY} == true ]]; then

  echo 'deploy by gh-pages'
  # gh-pages-clean
  gh-pages -d dist/scaffold/dist -r https://github.com/ng-alain/ng-alain/

fi

echo 'FINISHED!'
