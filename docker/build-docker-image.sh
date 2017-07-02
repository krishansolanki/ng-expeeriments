#!/bin/bash
set -xe
cd "$(dirname $0)/.."

. docker/environment

docker build -t ${IMAGE_NAME?} -f docker/Dockerfile .
