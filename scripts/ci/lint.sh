#!/bin/bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)
source ${thisDir}/_travis-fold.sh

cd $(dirname $0)/../..

TS=false
LESS=false

for ARG in "$@"; do
  case "$ARG" in
    -ts)
      TS=true
      ;;
    -less)
      LESS=true
      ;;
  esac
done

if [[ ${TS} == true ]]; then
  travisFoldStart "lint.ts"
    $(npm bin)/tslint -p tsconfig.json -c tslint.json 'packages/**/*.ts' --fix
  travisFoldEnd "lint.ts"
fi

if [[ ${LESS} == true ]]; then
  travisFoldStart "lint.less"
    $(npm bin)/stylelint 'packages/**/*.less' --syntax less --fix
  travisFoldEnd "lint.less"
fi

