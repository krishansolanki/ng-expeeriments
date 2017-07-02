#!/bin/bash
set -xe

CACHED_NODE_MODULES='/cache/node_modules'
BUILD_NODE_MODULES='/build/node_modules'

# Create external user and group unless already exists for this name
groupadd --non-unique -g "${EXTERNAL_GID?}" external
useradd --non-unique -M -u "${EXTERNAL_GID?}" -g "${EXTERNAL_GID?}" external

# Directory must exist to use as mount point,
# if not exists it will just be an empty dir
mkdir -p "${BUILD_NODE_MODULES?}"

# Bind mount the cached node_modules directory
mount -o bind "${CACHED_NODE_MODULES?}" "${BUILD_NODE_MODULES?}"

# Execute docker command
sudo -u external -g external -- "$@"

echo Done.
