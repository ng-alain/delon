#!/bin/bash

set -e

echo ">>> Remove All"
ls | egrep -v src | xargs rm -rf
ls -a | egrep "^\.[a-zA-Z]" | xargs rm -rf

echo ">>> Copy src/dist to root"
cp -R ./src/dist/** ./
rm -rf src

echo ">>> List All"
ls -a

echo ">>> Init git"
git config --global user.email "cipchk@qq.com"
git config --global user.name "cipchk"
git init
git add .
git commit -m "first commit"
git remote add origin git@e.coding.net:cipchk/ng-alain-site.git
