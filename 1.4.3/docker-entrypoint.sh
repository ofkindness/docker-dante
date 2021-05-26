#!/bin/sh
#set -e

if [ -z "$external" ]; then
	external=$(hostname -i)
fi

node /usr/src/dante/sockd.conf.js > /etc/sockd.conf

export USERNAME=dante
export PASSWORD=`pwgen -Bs1 12`

adduser -D $USERNAME && echo $USERNAME:$PASSWORD | chpasswd && echo $PASSWORD

exec "$@"
