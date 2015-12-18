#!/bin/sh

# print commands on screen
set -x

rm -rf app/data/3.0.0/cli
rm -rf app/data/3.0.0/files
rm -rf app/data/3.0.0/misc
rm -rf app/data/3.0.0/policies

# The -p flag preserves file timestamps

cp -pr node_modules/npm/doc/cli app/data/3.0.0/
cp -pr node_modules/npm/doc/files app/data/3.0.0/
cp -pr node_modules/npm/doc/misc app/data/3.0.0/
rm -f  app/data/3.0.0/misc/npm-index.md

cp -pr node_modules/@npm/policies app/data/3.0.0/
