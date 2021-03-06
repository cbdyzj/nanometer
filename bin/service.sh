#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1

cd ..

if [ -f .env ]; then
    . .env
fi

exec java $JAVA_OPTS -jar service/build/libs/service.jar "$@"
