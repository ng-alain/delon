#!/usr/bin/env bash

set -u -e -o pipefail

readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}

PACKAGES=(acl
  util
  theme
  abc
  auth
  cache
  chart
  mock
  form)
# acl util theme
# PACKAGES=(theme abc)
NODE_PACKAGES=(schematics)

buildLess() {
  rsync -a ${SRC_DIST_DIR}/theme/styles ${DIST_DIR}/packages-dist/theme
  node ./scripts/build/generate-less.js
  echo 'fix abc components import paths...'
  sed -i -r "s/..\/..\/..\/theme/..\/..\/..\/..\/theme/g" `grep ..\/..\/..\/theme -rl ${DIST_DIR}/packages-dist/abc/`
  sed -i -r "s/..\/..\/..\/theme/..\/..\/..\/..\/theme/g" `grep ..\/..\/..\/theme -rl ${DIST_DIR}/packages-dist/chart/`
  # echo 'fix zorro paths...'
  sed -i -r "s/~ng-zorro-antd/..\/..\/..\/..\/node_modules\/ng-zorro-antd/g" `grep ~ng-zorro-antd -rl ${DIST_DIR}/packages-dist/theme/styles/`
  echo 'build full css...'
  node ./scripts/build/generate-css.js
  node ./scripts/build/generate-css.js min
}

containsElement () {
  local e
  for e in "${@:2}"; do [[ "$e" == "$1" ]] && return 0; done
  return 1
}

#######################################
# update version references
# Arguments:
#   param1 - Source directory
#   param2 - Package Name
# Returns:
#   None
#######################################
updateVersionReferences() {
  NPM_DIR="$1"
  (
    echo "======    VERSION: Updating version references in ${NPM_DIR}"
    cd ${NPM_DIR}
    perl -p -i -e "s/ZORRO\-0\.0\.0\-PLACEHOLDER/${ZORROVERSION}/g" $(grep -ril ZORRO\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    perl -p -i -e "s/PEER\-0\.0\.0\-PLACEHOLDER/^${VERSION}/g" $(grep -ril PEER\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    perl -p -i -e "s/0\.0\.0\-PLACEHOLDER/${VERSION}/g" $(grep -ril 0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
  )
}

#######################################
# Adds banners to all files in a directory
# Arguments:
#   param1 - Directory to add license banners to
# Returns:
#   None
#######################################
addBanners() {
  for file in ${1}/*; do
    if [[ -f ${file} && "${file##*.}" != "map" ]]; then
      cat ${LICENSE_BANNER} > ${file}.tmp
      cat ${file} >> ${file}.tmp
      mv ${file}.tmp ${file}
    fi
  done
}

VERSION=$(node -p "require('./package.json').version")
ZORROVERSION=$(node -p "require('./package.json').dependencies['ng-zorro-antd']")
echo "=====BUILDING: Version ${VERSION}, Zorro Version ${ZORROVERSION}"

N="
"
PWD=`pwd`

NGC=${PWD}/node_modules/.bin/ngc
ROLLUP=${PWD}/node_modules/.bin/rollup
UGLIFY=${PWD}/node_modules/.bin/uglifyjs

PACKAGES_DIR=${PWD}/packages/
DIST_DIR=${PWD}/dist
SRC_DIST_DIR=${DIST_DIR}/packages
# rm -rf ${SRC_DIST_DIR}
# rm -rf ${SRC_DIST_DIR}-dist

echo "====== Copy source [exclude: schematics]"

mkdir -p ${SRC_DIST_DIR}
rsync -a --exclude="schematics/" --exclude="test.ts" ${PACKAGES_DIR} ${SRC_DIST_DIR}
node ./scripts/build/inline-template.js

for PACKAGE in ${PACKAGES[@]}
do
  echo "====== BUNDLING ${PACKAGE}"

  rm -rf ${SRC_DIST_DIR}-dist/${PACKAGE}

  ROOT_DIR=${PWD}/dist/packages
  SRC_DIR=${ROOT_DIR}/${PACKAGE}
  ROOT_OUT_DIR=${PWD}/dist/@delon
  OUT_DIR=${ROOT_OUT_DIR}/${PACKAGE}
  NPM_DIR=${PWD}/dist/packages-dist/${PACKAGE}
  ES2015_DIR=${NPM_DIR}/_es2015
  ES5_DIR=${NPM_DIR}/_es5
  PUBLIC_DIR=${NPM_DIR}/_public

  LICENSE_BANNER=${ROOT_DIR}/license-banner.txt

  if ! containsElement "${PACKAGE}" "${NODE_PACKAGES[@]}"; then

    updateVersionReferences ${SRC_DIR}

    echo '======    Compiling to es2015 via Angular compiler'
    $NGC -p ${SRC_DIR}/tsconfig-build.json --t es2015 --outDir ${ES2015_DIR}/src

    echo '======    Bundling to es module of es2015'
    export ROLLUP_TARGET=esm
    $ROLLUP -c ${SRC_DIR}/rollup.config.js -f es -i ${ES2015_DIR}/src/index.js -o ${ES2015_DIR}/esm2015/${PACKAGE}.js

    echo '======    Compiling to es5 via Angular compiler'
    $NGC -p ${SRC_DIR}/tsconfig-build.json --t es5 --outDir ${ES5_DIR}/src

    echo '======    Bundling to es module of es5'
    export ROLLUP_TARGET=esm
    $ROLLUP -c ${SRC_DIR}/rollup.config.js -f es -i ${ES5_DIR}/src/index.js -o ${ES5_DIR}/esm5/${PACKAGE}.js

    echo '======    Bundling to umd module of es5'
    export ROLLUP_TARGET=umd
    $ROLLUP -c ${SRC_DIR}/rollup.config.js -f umd -i ${ES5_DIR}/esm5/${PACKAGE}.js -o ${ES5_DIR}/bundles/${PACKAGE}.umd.js

    echo '======    Bundling to minified umd module of es5'
    export ROLLUP_TARGET=mumd
    $ROLLUP -c ${SRC_DIR}/rollup.config.js -f umd -i ${ES5_DIR}/esm5/${PACKAGE}.js -o ${ES5_DIR}/bundles/${PACKAGE}.umd.min.js

    echo '======    Unifying publish folder'
    mv ${ES5_DIR} ${PUBLIC_DIR}
    mv ${ES2015_DIR}/esm2015 ${PUBLIC_DIR}/esm2015
    sed -e "s/from '.\//from '.\/src\//g" ${PUBLIC_DIR}/src/index.d.ts > ${PUBLIC_DIR}/${PACKAGE}.d.ts
    sed -e "s/\":\".\//\":\".\/src\//g" ${PUBLIC_DIR}/src/index.metadata.json > ${PUBLIC_DIR}/${PACKAGE}.metadata.json
    rm ${PUBLIC_DIR}/src/index.d.ts ${PUBLIC_DIR}/src/index.metadata.json

    cp ${SRC_DIR}/package.json ${PUBLIC_DIR}/package.json
    cp ${SRC_DIR}/README.md ${PUBLIC_DIR}/README.md
    cp ./LICENSE ${PUBLIC_DIR}/LICENSE

    addBanners ${PUBLIC_DIR}/bundles
  else
    echo "not yet!!!"
  fi

  if [[ -d ${PUBLIC_DIR} ]]; then
      updateVersionReferences ${PUBLIC_DIR} ${PACKAGE}
  fi

  mv ${PUBLIC_DIR}/** ${PWD}/dist/packages-dist/${PACKAGE}
  rm -rf ${PUBLIC_DIR}
  rm -rf ${ES2015_DIR}

done

if containsElement "theme" "${PACKAGES[@]}"; then
  buildLess
fi

# buildLess
echo 'FINISHED!'
