#!/bin/bash

VERSION=`jq '.version' -r package.json`
code-push release-react News-Explorer $1 -t ${VERSION}