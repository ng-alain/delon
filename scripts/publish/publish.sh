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
  (cd ${ROOT}/@delon; for p in `ls .`; do npm publish --access public $p; done)
  cd ${ROOT}/ng-alain
  npm publish --access public
}

publishToNext() {
  (cd ${ROOT}/@delon; for p in `ls .`; do npm publish $p --access public --tag next; done)
  cd ${ROOT}/ng-alain
  npm publish --access public --tag next
}

syncTaobao() {
  (cd ${ROOT}/@delon; for p in `ls .`; do curl -X PUT https://npm.taobao.org/sync/@delon/$p?sync_upstream=true; done)
  curl -X PUT https://npm.taobao.org/sync/ng-alain?sync_upstream=true
}

clone
if [[ ${NEXT} == true ]]; then
  publishToNext
else
  publishToMaster
fi
syncTaobao
