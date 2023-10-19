#!/bin/bash

# set -u -e -o pipefail

readonly thisDir=$(cd $(dirname $0); pwd)

cd $(dirname $0)/../..

DIST="$(pwd)/dist"
ROOT=${DIST}/delon-builds

NEXT=false
for ARG in "$@"; do
  case "$ARG" in
    -next)
      NEXT=true
      ;;
  esac
done

VERSION=$(node -p "require('./package.json').version")
echo "Version ${VERSION}"

clone() {
  rm -rf ${ROOT}
  mkdir -p ${ROOT}
  cd ${DIST}
  echo ">>> Clone delon & cli dist..."
  git clone --depth 1 https://github.com/ng-alain/delon-builds.git
}

publishToMaster() {
  (cd ${ROOT}/@delon; for p in `ls .`; do cd $p; npm publish; cd ..; done)
  cd ${ROOT}/ng-alain
  npm publish
}

publishToNext() {
  (cd ${ROOT}/@delon; for p in `ls .`; do cd $p; npm publish --tag next; cd ..; done)
  cd ${ROOT}/ng-alain
  npm publish --tag next
}

syncNpmMirror() {
  (cd ${ROOT}/@delon; for p in `ls .`; do curl -X PUT https://registry-direct.npmmirror.com/-/package/@delon/$p/syncs; done)
  curl -X PUT https://registry-direct.npmmirror.com/-/package/ng-alain/syncs
}

clone
if [[ ${NEXT} == true ]]; then
  publishToNext
else
  publishToMaster
fi
syncNpmMirror
