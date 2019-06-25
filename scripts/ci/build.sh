#!/bin/bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)
source ${thisDir}/_travis-fold.sh

TRAVIS=false
for ARG in "$@"; do
  case "$ARG" in
    -travis)
      TRAVIS=true
      ;;
  esac
done

cd $(dirname $0)/../..

DIST="$(pwd)/dist"

cloneScaffold() {
  if [[ ! -d ng-alain ]]; then
    echo ">>> Not found scaffold source files, must be clone ng-alain ..."
    git clone --depth 1 https://github.com/ng-alain/ng-alain.git
  else
    echo ">>> Found scaffold source files"
  fi
}

buildDelon() {
  travisFoldStart "@delon"
    ./scripts/ci/build-delon.sh
  travisFoldEnd "@delon"
}

buildSchematies() {
  travisFoldStart "schematies"
    ./scripts/ci/build-schematics.sh -b -copy -travis
  travisFoldEnd "schematies"
}

cloneScaffold
buildDelon
buildSchematies
