#!/usr/bin/env bash

is_lint() {
  [[ "${MODE}" = lint ]]
}

is_lib_test() {
  [[ "${MODE}" = lib_test ]]
}

is_cli_test() {
  [[ "${MODE}" = cli_test ]]
}

is_unit() {
  [[ "${MODE}" =~ ^.*_(test)$ ]]
}

is_site() {
  [[ "${MODE}" = site ]]
}
