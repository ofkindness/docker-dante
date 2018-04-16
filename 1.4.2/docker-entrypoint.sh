#!/bin/sh
#set -e

if [ -z "$external" ]; then
	external=$(hostname -i)
fi

node /usr/src/dante/sockd.conf.js > /etc/sockd.conf

exec "$@"
