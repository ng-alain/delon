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
    PACKAGE_NAMES=(abc acl auth cache mock theme cli)
    for name in ${PACKAGE_NAMES[@]}
    do
        sed -i "s/\"@delon\/${name}\":[ ]*\"[^\"]*\"/\"@delon\/${name}\": \"^${VERSION}\"/g" ${PACKAGE_DIR}
    done
  )
}

VERSION=$(node -p "require('./package.json').version")
echo "Version ${VERSION}, BUILD(-b): ${BUILD}, DEPLOY(-d): ${DEPLOY}"

PWD=`pwd`
SCAFFOLD_DIR=${PWD}/scaffold
ROOT_DIR=${PWD}/dist/scaffold
DIST_DIR=${ROOT_DIR}/dist

if [[ ${BUILD} == true ]]; then

    echo '===== copy...'

    rm -rf ${ROOT_DIR}
    mkdir -p ${ROOT_DIR}
    rsync -a --exclude="node_modules/" ${SCAFFOLD_DIR}/ ${ROOT_DIR}

    cd ${ROOT_DIR}
    updateVersionReferences ${ROOT_DIR}/package.json
    updateVersionReferences ${SCAFFOLD_DIR}/package.json

    echo '===== need mock'
    sed -i "s/const MOCKMODULE[^;]*;/const MOCKMODULE = [ DelonMockModule.forRoot({ data: MOCKDATA }) ];/g" ${ROOT_DIR}/src/app/delon.module.ts

    npm i

    echo '===== build...'
    $(npm bin)/ng build --prod --build-optimizer --bh /ng-alain/

fi

if [[ ${DEPLOY} == true ]]; then

    echo 'copy index.html > 404.html'
    cp -f ${DIST_DIR}/index.html ${DIST_DIR}/404.html

    echo 'deploy by gh-pages'
    $(npm bin)/gh-pages -d dist/scaffold/dist

fi

echo 'FINISHED!'
