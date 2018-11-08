#!/bin/bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)
source ${thisDir}/_travis-fold.sh

${thisDir}/build-all.sh

cd $(dirname $0)/../..

DIST="$(pwd)/dist"

commitSha=$(git rev-parse --short HEAD)
commitAuthorName=$(git --no-pager show -s --format='%an' HEAD)
commitAuthorEmail=$(git --no-pager show -s --format='%ae' HEAD)
commitMessage=$(git log --oneline -n 1)
commitMessageCheck=$(git log --oneline -n 2)

if [ ${commitAuthorName} != '卡色' ]; then
  echo "Warning: Just only 卡色 user (current: ${commitAuthorName})"
  exit 0
fi

if [ -z ${DELON_BUILDS_TOKEN} ]; then
  echo "Error: No access token for GitHub could be found." \
       "Please set the environment variable 'DELON_BUILDS_TOKEN'."
  exit 1
fi

travisFoldStart "publish.dist"
  buildDir=${DIST}/publish
  rm -rf ${buildDir}
  mkdir -p ${buildDir}
  cp -r ${DIST}/@delon ${buildDir}/@delon
  cp -r ${DIST}/ng-alain ${buildDir}/ng-alain

  packageRepo=delon-builds
  buildVersion=$(node -pe "require('./package.json').version")
  branchName=${TRAVIS_BRANCH:-'master'}

  buildVersionName="${buildVersion}-${commitSha}"
  buildTagName="${branchName}-${commitSha}"
  buildCommitMessage="${branchName} - ${commitMessage}"

  repoUrl="https://github.com/ng-alain/${packageRepo}.git"
  repoDir="${DIST}/${packageRepo}"

  echo "Starting publish process ${buildVersionName} into ${branchName}.."

  rm -rf ${repoDir}
  mkdir -p ${repoDir}

  echo "Starting cloning process of ${repoUrl} into ${repoDir}.."

  if [[ $(git ls-remote --heads ${repoUrl} ${branchName}) ]]; then
    echo "Branch ${branchName} already exists. Cloning that branch."
    git clone ${repoUrl} ${repoDir} --depth 1 --branch ${branchName}

    cd ${repoDir}
    echo "Cloned repository and switched into the repository directory (${repoDir})."
  else
    echo "Branch ${branchName} does not exist on ${packageRepo} yet."
    echo "Cloning default branch and creating branch '${branchName}' on top of it."

    git clone ${repoUrl} ${repoDir} --depth 1
    cd ${repoDir}

    echo "Cloned repository and switched into directory. Creating new branch now.."

    git checkout -b ${branchName}
  fi

  rm -rf ./*
  cp -r ${buildDir}/* ./

  echo "Removed everything from ${packageRepo}#${branchName} and added the new build output."

  # 替换版本号
  if [[ $commitMessageCheck =~ "release(" ]]; then
    echo "===== Release version does not need to change version ====="
  else
    echo "Replace build version..."
    sed -i "s/${buildVersion}/${buildVersionName}/g" $(find . -type f -not -path '*\/.*' -name 'theme.js' -o -name 'package.json')
  fi

  echo "Updated the build version in every file to include the SHA of the latest commit."

  # Prepare Git for pushing the artifacts to the repository.
  git config user.name "${commitAuthorName}"
  git config user.email "${commitAuthorEmail}"
  git config credential.helper "store --file=.git/credentials"

  echo "https://${DELON_BUILDS_TOKEN}:@github.com" > .git/credentials

  if [[ $(git ls-remote origin "refs/tags/${buildTagName}") ]]; then
    echo "removed tag because tag is already published"
    git push origin :refs/tags/${buildTagName}
  fi

  echo "Git configuration has been updated to match the last commit author. Publishing now.."

  git add -A
  git commit --allow-empty -m "${buildCommitMessage}"
  git tag "${buildTagName}"
  git push origin ${branchName} --tags

  echo "Published package artifacts for ${packageName}#${buildVersionName} into ${branchName}"
travisFoldEnd "publish.dist"

if [[ $commitMessageCheck =~ "release(" ]]; then
  echo "Release version does not need to change version ====="
  echo "COMMIT SOURCE: ${commitMessageCheck}"
fi

echo "Download link:"
echo "https://github.com/ng-alain/delon-builds/archive/${buildTagName}.zip"
