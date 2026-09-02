set -e

cd $(dirname $0)/../..

VERSION=$(node -p "require('./package.json').version")
ZORROVERSION=$(node -p "require('./package.json').dependencies['ng-zorro-antd']")

updateVersionReferences() {
  NPM_DIR="$1"
  echo ">>> VERSION: Updating dependencies version references in ${NPM_DIR}"
  node ./scripts/ci/update-version-references.mjs "${NPM_DIR}" --version "${VERSION}" --zorro "${ZORROVERSION}"
}

containsElement () {
  local e
  for e in "${@:2}"; do [[ "$e" == "$1" ]] && return 0; done
  return 1
}
