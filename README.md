# <a href="https://dreamli1314.github.io/angboot/"><img width="60px" align="center" src="https://raw.githubusercontent.com/DreamLi1314/angboot/0.2.2/client/web/src/favicon.ico" alt="icon"/></a> [angboot](https://dreamli1314.github.io/angboot/) 
[![Build Status](https://travis-ci.org/DreamLi1314/angboot.svg?branch=0.2.2)](https://travis-ci.org/DreamLi1314/angboot)
[![codecov](https://codecov.io/gh/DreamLi1314/angboot/branch/0.2.2/graph/badge.svg)](https://codecov.io/gh/DreamLi1314/angboot)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/dreamli1314/angboot.svg)](http://isitmaintained.com/project/dreamli1314/angboot "Percentage of issues still open")
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/dreamli1314/angboot.svg)](http://isitmaintained.com/project/dreamli1314/angboot "Average time to resolve an issue")
![GitHub release](https://img.shields.io/github/release-pre/dreamli1314/angboot)
![GitHub](https://img.shields.io/github/license/dreamli1314/angboot)
[![Gitter](https://badges.gitter.im/Angboot/Angboot.svg)](https://gitter.im/Angboot/Angboot?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## 1. Prerequisites
You should have installed the following software and configure the corresponding environment variables:

* JDK: version >= 1.8

## 2. Technical selection
* Java(Basic Framework): Spring Boot 2.1.6
* Security: SpringSecurity
* ORM: Mybatis
* SSO: CAS
* Web: Angular8 + Bootstrap4 + SCSS
* Server: Tomcat
* Database: H2 + Druid
* Project Management Tools: Gradle
* CI Tools: [Travis](https://travis-ci.org/DreamLi1314/angboot)(Default), Jenkins
* Cache: Map(Support Redis, Ehcache etc.)
* RPC: Dubbo

## 3. Run application
> execute follow command for install dependencies in your terminal, Note: **just first**.
```
gradlew[.bat] buildApp
```
> execute follow command for start up application
```
gradlew[.bat] server
```

## 4. Versions
* [0.0.0](https://github.com/DreamLi1314/angboot/tree/0.0.0)
* [0.1.x](https://github.com/DreamLi1314/angboot/tree/0.1.x)
* [0.2.0](https://github.com/DreamLi1314/angboot/tree/0.2.0)
* [0.2.1](https://github.com/DreamLi1314/angboot/tree/0.2.1)

## 5. Getting help
To see [User Manual](https://dreamli1314.github.io/angboot/).

## 6. Todo list of this version
* Upgrade angular to v8.

## 7. Change Log
### Version 0.1.x:
* project management tools from `ant + maven` to `gradle`.
* upgrade angular from `v6` to `v7`.

### Version 0.2.0:
### Version 0.2.1:
* upgrade gradle from `v5.x` to `v6.x`.
### Version 0.2.2
* upgrade angular from `v7` to `v8`.

## License
AngBoot is Open Source software released under the Apache 2.0 license.
