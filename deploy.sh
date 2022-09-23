#!/bin/sh

export GIT_USER=mreynier
export USE_SSH=true
export DEPLOYMENT_BRANCH=gh-pages

yarn && yarn deploy
