#!/usr/bin/env bash
rm -rf archive-docs
git clone https://github.com/ng-alain/archive-docs.git
cp -r archive-docs/issue-helper src/dist/browser/issue-helper
cp -r archive-docs/version src/dist/browser/version
rm -rf archive-docs
