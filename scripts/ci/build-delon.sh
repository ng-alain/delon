#!/usr/bin/env bash
#!/usr/bin/env node --max-old-space-size=4096

set -u -e -o pipefail

cd $(dirname $0)/../..

source ./scripts/ci/utils.sh

DEBUG=false
PACKAGES=(util
  testing
  acl
  theme
  abc
  auth
  cache
  chart
  mock
  form)
NODE_PACKAGES=(cli)

for ARG in "$@"; do
  case "$ARG" in
    -n)
      PACKAGES=($2)
      ;;
    -debug)
      DEBUG=true
      ;;
  esac
done

buildLess() {
  echo 'copy styles...'
  node ./scripts/build/copy-less.js
  echo 'fix zorro path...'
  node ./scripts/build/fix-zorro-path.js
  echo 'build full css...'
  node ./scripts/build/generate-css.js
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

copySchemas() {
  cp ${SOURCE}/abc/onboarding/schema.json ${DIST}/abc/onboarding/schema.json
}

echo "=====BUILDING: Version ${VERSION}, Zorro Version ${ZORROVERSION}"

N="
"
PWD=`pwd`

SOURCE=${PWD}/packages
DIST=${PWD}/dist/@delon

# fix linux
# npm rebuild node-sass

build() {
  for NAME in ${PACKAGES[@]}
  do
    echo "====== PACKAGING ${NAME}"

    LICENSE_BANNER=${SOURCE}/license-banner.txt

    if ! containsElement "${NAME}" "${NODE_PACKAGES[@]}"; then
      # packaging
      node --max_old_space_size=4096 ${PWD}/scripts/build/packing ${NAME}
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

  buildLess
  copySchemas
}

build

echo 'FINISHED!'

# TODO: just only cipchk
# clear | bash ./scripts/ci/build-delon.sh -debug
# clear | bash ./scripts/ci/build-delon.sh -n chart -debug
if [[ ${DEBUG} == true ]]; then
  cd ../../
  DEBUG_FROM=${PWD}/work/delon/dist/@delon/theme/*
  DEBUG_TO=${PWD}/work/ng11-strict/node_modules/@delon/theme
  echo "DEBUG_FROM:${DEBUG_FROM}"
  echo "DEBUG_TO:${DEBUG_TO}"
  rm -rf ${DEBUG_TO}
  mkdir -p ${DEBUG_TO}
  rsync -a ${DEBUG_FROM} ${DEBUG_TO}
  echo "DEBUG FINISHED~!"
fi
