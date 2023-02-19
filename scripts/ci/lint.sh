#!/bin/bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)

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
  npm run lint:ts
fi

if [[ ${LESS} == true ]]; then
  npm run lint:style
fi

