#!/bin/bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)
source ${thisDir}/_travis-fold.sh

cd $(dirname $0)/../..

LINT_TYPES=(ts less)

for ARG in "$@"; do
  case "$ARG" in
    -t)
      LINT_TYPES=($2)
      ;;
  esac
done

containsElement () {
  local e
  for e in "${@:2}"; do [[ "$e" == "$1" ]] && return 0; done
  return 1
}

if containsElement "ts" "${LINT_TYPES[@]}"; then
  travisFoldStart "lint.ts"
    $(npm bin)/tslint -p tsconfig.json -c tslint.json 'packages/**/*.ts'
  travisFoldEnd "lint.ts"
fi

if containsElement "less" "${LINT_TYPES[@]}"; then
  travisFoldStart "lint.less"
    $(npm bin)/stylelint \"{packages}/**/*.less\" --syntax less
  travisFoldEnd "lint.less"
fi

