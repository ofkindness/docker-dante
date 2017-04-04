FROM alpine:3.5

MAINTAINER Andrei Tretyakov <andrei.tretyakov@gmail.com>

ENV DANTE_VERSION 1.4.2

RUN apk add --no-cache curl gcc g++ make

RUN mkdir -p /usr/src

RUN cd /usr/src \
    && curl -O http://www.inet.no/dante/files/dante-$DANTE_VERSION.tar.gz \
    && tar xvfz dante-$DANTE_VERSION.tar.gz

RUN cd /usr/src/dante-$DANTE_VERSION \
    && ac_cv_func_sched_setscheduler=no ./configure \
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

COPY sockd.conf /etc/

EXPOSE 1080

CMD ["sockd", "-N", "8"]
