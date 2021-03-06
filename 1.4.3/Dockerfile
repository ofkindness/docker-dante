FROM alpine:3.13 AS builder

LABEL maintainer="Andrei Tretyakov <andrei.tretyakov@gmail.com>"

ENV DANTE_VERSION 1.4.3

RUN apk add --no-cache curl gcc g++ make

RUN mkdir -p /usr/src/

RUN cd /usr/src \
    && curl -O http://www.inet.no/dante/files/dante-$DANTE_VERSION.tar.gz \
    && tar xvfz dante-$DANTE_VERSION.tar.gz

RUN cd /usr/src/dante-$DANTE_VERSION \
    && ac_cv_func_sched_setscheduler=no ./configure \
    --build=unknown-unknown-linux \
    --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --disable-client \
    --without-libwrap \
    --without-bsdauth \
    --without-gssapi \
    --without-krb5 \
    --without-upnp \
    --without-pam \
    && make && make install

FROM node:16-alpine

RUN mkdir -p /usr/src/dante \
    && apk add --no-cache nodejs nodejs-npm pwgen

COPY --from=builder /usr/sbin/sockd  /usr/sbin/

WORKDIR /usr/src/dante

COPY package.json sockd.conf.js docker-entrypoint.sh ./

RUN npm i

EXPOSE 1080

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["sockd", "-N", "8"]
