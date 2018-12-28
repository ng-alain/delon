#!/usr/bin/env bash

set -u -e -o pipefail

cd $(dirname $0)/../..

BUILD=false
TEST=false
DEBUG=false
TRAVIS=false
COPY=false
for ARG in "$@"; do
  case "$ARG" in
    -t)
      TEST=true
      ;;
    -b)
      BUILD=true
      ;;
    -travis)
      TRAVIS=true
      ;;
    -copy)
      COPY=true
      ;;
    -debug)
      DEBUG=true
      ;;
  esac
done

VERSION=$(node -p "require('./package.json').version")
DEPENDENCIES=$(node -p "
  const vs = require('./package.json').dependencies;
  const dvs = require('./package.json').devDependencies;
  [
    'screenfull',
    'ajv',
    'less-bundle-promise',
    '@ngx-translate/core',
    '@ngx-translate/http-loader',
    'tslint-config-prettier',
    'tslint-language-service',
    'editorconfig-tools',
    'lint-staged',
    'husky',
    'prettier',
    'prettier-stylelint',
    'stylelint',
    'stylelint-config-standard',
    '@antv/data-set',
    '@antv/g2',
    '@antv/g2-plugin-slider',
    '@angularclass/hmr'
  ].map(key => key.replace(/\//g, '\\\\/').replace(/-/g, '\\\\-') + '|' + (vs[key] || dvs[key])).join('\n\t');
")
ZORROVERSION=$(node -p "require('./package.json').dependencies['ng-zorro-antd']")
echo "=====BUILDING: Version ${VERSION}, Zorro Version ${ZORROVERSION}"

N="
"
PWD=`pwd`
TSC=${PWD}/node_modules/.bin/tsc
JASMINE=${PWD}/node_modules/.bin/jasmine

SOURCE=${PWD}/packages/schematics
DIST=${PWD}/dist/ng-alain/

updateVersionReferences() {
  NPM_DIR="$1"
  (
    cd ${NPM_DIR}

    echo "======    VERSION: Updating dependencies version references in ${NPM_DIR}"
    local lib version
    for dependencie in ${DEPENDENCIES[@]}
    do
      IFS=$'|' read -r lib version <<< "$dependencie"
      echo "============ update ${lib}: ${version}"
      perl -p -i -e "s/${lib}\@DEP\-0\.0\.0\-PLACEHOLDER/${lib}\@${version}/g" $(grep -ril ${lib}\@DEP\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    done

    echo "======    VERSION: Updating version references in ${NPM_DIR}"
    perl -p -i -e "s/ZORRO\-0\.0\.0\-PLACEHOLDER/${ZORROVERSION}/g" $(grep -ril ZORRO\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    perl -p -i -e "s/PEER\-0\.0\.0\-PLACEHOLDER/^${VERSION}/g" $(grep -ril PEER\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    perl -p -i -e "s/0\.0\.0\-PLACEHOLDER/${VERSION}/g" $(grep -ril 0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
  )
}

copyFiles() {
  mkdir -p ${2}
  readonly paths=(
    # i18n data
    "${1}src/assets/tmp/i18n|${2}application/files/i18n"
    # code styles
    "${1}.prettierignore|${2}application/files/root/__dot__prettierignore"
    "${1}.prettierrc|${2}application/files/root/__dot__prettierrc"
    "${1}.stylelintrc|${2}application/files/root/__dot__stylelintrc"
    # cli
    # "${1}_cli-tpl|${2}application/files/root/"
    # ci
    "${1}.vscode|${2}application/files/root/__dot__vscode"
    "${1}scripts/color-less.js|${2}application/files/root/scripts/"
    # LICENSE
    "${1}LICENSE|${2}application/files/root"
    "${1}README.md|${2}application/files/root"
    "${1}README-zh_CN.md|${2}application/files/root"
    # mock
    "${1}_mock/_user.ts|${2}application/files/root/_mock/"
    # src
    "${1}src/typings.d.ts|${2}application/files/src/"
    "${1}src/environments|${2}application/files/src/"
    "${1}src/styles|${2}application/files/src/"
    "${1}src/main.ts|${2}application/files/src/"
    "${1}src/styles.less|${2}application/files/src/"
    "${1}src/style-icons-auto.ts|${2}application/files/src/"
    "${1}src/style-icons.ts|${2}application/files/src/"
    # assets
    "${1}src/assets/*.svg|${2}application/files/src/assets/"
    "${1}src/assets/tmp/img/*|${2}application/files/src/assets/tmp/img/"
    "${1}src/assets/tmp/i18n/*|${2}application/files/src/assets/tmp/i18n/"
    "${1}src/assets/tmp/app-data.json|${2}application/files/src/assets/tmp/"
    # core
    "${1}src/app/core/i18n|${2}application/files/src/app/core/"
    "${1}src/app/core/net|${2}application/files/src/app/core/"
    "${1}src/app/core/module-import-guard.ts|${2}application/files/src/app/core/"
    "${1}src/app/core/README.md|${2}application/files/src/app/core/"
    # shared
    "${1}src/app/shared/utils/*|${2}application/files/src/app/shared/utils/"
    "${1}src/app/shared/index.ts|${2}application/files/src/app/shared/"
    # app.component
    "${1}src/app/delon.module.ts|${2}application/files/src/app/"
    "${1}src/app/app.component.ts|${2}application/files/src/app/"
    # layout
    "${1}src/app/layout/fullscreen|${2}application/files/src/app/layout/"
    "${1}src/app/layout/passport|${2}application/files/src/app/layout/"
    "${1}src/app/layout/default/setting-drawer|${2}application/files/src/app/layout/default/"
    "${1}src/app/layout/default/default.component.html|${2}application/files/src/app/layout/default/"
    "${1}src/app/layout/default/default.component.ts|${2}application/files/src/app/layout/default/"
    "${1}src/app/layout/default/header/index.md|${2}application/files/src/app/layout/default/header/"
    "${1}src/app/layout/default/header/components|${2}application/files/src/app/layout/default/header/"
    "${1}src/app/layout/default/header/header.component.ts|${2}application/files/src/app/layout/default/header/"
    "${1}src/app/layout/default/sidebar|${2}application/files/src/app/layout/default/"
    # router
    "${1}src/app/routes/callback|${2}application/files/src/app/routes/"
    "${1}src/app/routes/exception|${2}application/files/src/app/routes/"
    "${1}src/app/routes/passport|${2}application/files/src/app/routes/"
  )
  local from to
  for fields in ${paths[@]}
  do
    IFS=$'|' read -r from to <<< "$fields"
    if [[ ${to:(-1):1} == '/' ]]; then
      mkdir -p $to
    fi
    local fromLen=${#from}-2
    if [[ ${from:(-2):2} == '/*' ]]; then
      if [[ ! -d "${from:0:fromLen}" ]]; then
        echo "未找到 ${from:0:fromLen} 目录"
        continue
      fi
    fi
    if [[ ${from} != '' ]]; then
      cp -fr $from $to
    fi
  done
}

tsconfigFile=${SOURCE}/tsconfig.json
if [[ ${TEST} == true ]]; then
  tsconfigFile=${SOURCE}/tsconfig.spec.json
  DIST=${PWD}/dist/schematics-test/
fi

if [[ ${BUILD} == true ]]; then
  rm -rf ${DIST}

  echo "Building...${tsconfigFile}"
  $TSC -p ${tsconfigFile}
  rsync -am --include="*.json" --include="*/" --exclude=* ${SOURCE}/ ${DIST}/
  rsync -am --include="*.d.ts" --include="*/" --exclude=* ${SOURCE}/ ${DIST}/
  rsync -am --include="/files" ${SOURCE}/ ${DIST}/
  rm ${DIST}/test.ts ${DIST}/tsconfig.json ${DIST}/tsconfig.spec.json

  if [[ ${COPY} == true ]]; then
    if [[ ${TRAVIS} == true ]]; then
      echo "== copy delon/ng-alain files via travis mode"
      copyFiles 'ng-alain/' ${DIST}/
    else
      echo "== copy work/ng-alain files via dev mode"
      copyFiles '../ng-alain/' ${DIST}/
    fi
  else
    echo "== can't copy files!"
  fi

  cp ${SOURCE}/README.md ${DIST}/README.md
  cp ./LICENSE ${DIST}/LICENSE

  updateVersionReferences ${DIST}
fi

if [[ ${TEST} == true ]]; then
  echo "jasmine"
  $JASMINE "${DIST}/**/*.spec.js"
fi

echo "Finished cli!"

# TODO: just only cipchk
# clear | bash ./scripts/ci/build-schematics.sh -b -t
# clear | bash ./scripts/ci/build-schematics.sh -b -copy
# clear | bash ./scripts/ci/build-schematics.sh -b -copy -debug -dev
if [[ ${DEBUG} == true ]]; then
  cd ../../
  DEBUG_FROM=${PWD}/work/delon/dist/ng-alain/*
  DEBUG_TO=${PWD}/work/ng7/node_modules/ng-alain/
  echo "DEBUG_FROM:${DEBUG_FROM}"
  echo "DEBUG_TO:${DEBUG_TO}"
  rm -rf ${DEBUG_TO}/application
  rsync -a ${DEBUG_FROM} ${DEBUG_TO}
  echo "DEBUG FINISHED~!"
fi
