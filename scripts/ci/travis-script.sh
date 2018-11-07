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
    ./lint.sh
  elif is_lib_test; then
    $(npm bin)/ng test --code-coverage --watch=false
    uploadCoverage
  elif is_cli_test; then
    ./build-schematics.sh -b -t -travis
  elif is_site; then
    npm run site:gen
    $(npm bin)/ng build --prod --build-optimizer --base-href /
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

  if is_artifacts; then
    ./deploy.sh
  elif is_build; then
    ./build-all.sh
  fi
}

if [[ "${MODE}" ]]; then
  testing
elif [[ "${DEPLOY_MODE}" ]]; then
  deploy
fi
