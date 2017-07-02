#!/bin/bash
set -e

cd "$(dirname $0)/.."
. docker/environment

if [ -t 1 ]; then
  DOCKER_INTERACTIVE_OPTS='-it'
else
  DOCKER_INTERACTIVE_OPTS=''
fi

docker run ${DOCKER_INTERACTIVE_OPTS?} -p 4200:4200 --rm --privileged\
  -e "EXTERNAL_UID=$(id -u)"\
  -e "EXTERNAL_GID=$(id -g)"\
  --volume "${PWD?}:/build:rw"\
  ${IMAGE_NAME?}\
  "$@"
