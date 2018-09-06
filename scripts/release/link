#!/usr/bin/env bash

# Use for PATCH releases
# Link all packages in `dist/packages-dist` to local

(cd dist/packages-dist; for p in `ls .`;do npm link $p; done)
