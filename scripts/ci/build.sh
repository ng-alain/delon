#!/bin/bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)

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
  ./scripts/ci/build-delon.sh
}

buildSchematies() {
  ./scripts/ci/build-schematics.sh -b -copy -clone
}

cloneScaffold
buildDelon
buildSchematies
