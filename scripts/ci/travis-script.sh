#!/bin/bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)
cd ${thisDir}

source ${thisDir}/_travis-fold.sh
source ${thisDir}/_retry-call.sh
source ${thisDir}/_mode.sh

testing() {
  echo ""
  echo "Building sources and running tests. Running mode: ${MODE}"
  echo ""
  if is_lint; then
    npm run lint
  elif is_lib_test; then
    npm run test
    uploadCoverage
  elif is_cli_test; then
    npm run test:schematics
  elif is_site; then
    npm run site:build
  fi
}

uploadCoverage() {
  if [ -f coverage/lcov.info ]; then
    echo "Uploading coverage report"
    $(npm bin)/codecov
  else
    echo "Not found coverage/lcov.info file"
  fi
}

deploy() {
  echo ""
  echo "Starting the deployment script. Running mode: ${DEPLOY_MODE}"
  echo ""

  if [[ "${DEPLOY_MODE}" == "build-artifacts" ]]; then
    ./build-artifacts.sh
  fi
}

if [[ "${MODE}" ]]; then
  testing
elif [[ "${DEPLOY_MODE}" ]]; then
  deploy
fi
