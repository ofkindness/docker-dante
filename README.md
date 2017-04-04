Supported tags and respective `Dockerfile` links
================================================

-	`1.4.2`, `1.4`, `latest`: [Dockerfile](https://github.com/ofkindness/docker-dante/tree/master/1.4.2/Dockerfile)

For more information about this image and its history, please see [the relevant manifest `docker-dante/manifest` file](https://github.com/ofkindness/docker-dante/tree/master/manifest).

What is Dante?
==============

Dante is a product developed by Inferno Nettverk A/S. It consists of a SOCKS server and a SOCKS client, implementing [RFC 1928](https://www.ietf.org/rfc/rfc1928.txt) and related standards. It could be used as a standard (forward) proxy server and as a reverse proxy server.

How to use this image
=====================

```console
$ docker run -d --name some-socks-server -p 127.0.0.1:1080:1080 kafka/dante
```

Information about Dante
=======================

* [Documentation](https://www.inet.no/dante/doc/)
* [Community Mailing Lists](https://www.inet.no/dante/lists.html)
* [Configuration and setup](https://www.inet.no/dante/doc/latest/config/index.html)

User Feedback
=============

Issues
------

If you have any problems with or questions about this image, please contact through a [GitHub issue](https://github.com/ofkindness/docker-dante/issues).

Contributing
------------

You are invited to contribute new features, fixes, or updates, large or small; It is always thrilled to receive pull requests, and process them.

Before you start to code, it is recommend discussing your plans through a [GitHub issue](https://github.com/ofkindness/docker-dante/issues), especially for ambitious contributions.
