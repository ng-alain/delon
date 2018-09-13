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
NODE_PACKAGES=(schematics)

for ARG in "$@"; do
  case "$ARG" in
    -n)
      PACKAGES=($2)
      ;;
  esac
done

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

TSNODE=${PWD}/node_modules/.bin/ts-node
SOURCE=${PWD}/packages
DIST=${PWD}/dist/packages-dist

# fix linux
# npm rebuild node-sass

for NAME in ${PACKAGES[@]}
do
  echo "====== PACKAGING ${NAME}"

  LICENSE_BANNER=${SOURCE}/license-banner.txt

  if ! containsElement "${NAME}" "${NODE_PACKAGES[@]}"; then
    # packaging
    $TSNODE ${PWD}/scripts/build/packing.ts ${NAME}
    # license banner
    addBanners ${DIST}/${NAME}/bundles
    # license file
    cp ${PWD}/LICENSE ${DIST}/${NAME}/LICENSE
    # package version
    updateVersionReferences ${DIST}/${NAME}
  else
    echo "not yet!!!"
  fi

done

if containsElement "theme" "${PACKAGES[@]}"; then
  buildLess
fi

# buildLess
echo 'FINISHED!'
