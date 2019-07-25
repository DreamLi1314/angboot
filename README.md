# [angboot](https://dreamli1314.github.io/angboot/) [![Build Status](https://travis-ci.org/DreamLi1314/angboot.svg?branch=master)](https://travis-ci.org/DreamLi1314/angboot)
![icon](https://raw.githubusercontent.com/DreamLi1314/angboot/0.1.x/web/src/favicon.ico)
## 1 Prerequisites
You should have installed the following software and configure the corresponding environment variables:

* JDK: version >= 1.8

## 2. Technical selection

* Java: Spring Boot + SpringSecurity + Mybatis + SSO(CAS)
* web: Angular7 + Bootstrap + SCSS
* Server: Tomcat
* Database: H2
* Project Management Tools: Gradle
* CI Tools: [Travis](https://travis-ci.org/DreamLi1314/angboot)(Default), Jenkins
* Cache: Map(Support Redis, Ehcache etc.)

## 3. Run application
> execute follow command for install dependencies in your terminal, Note: **just first**.
```
gradlew[.bat] build
```
> execute follow command for start up application
```
gradlew[.bat] server
```

## 4. Getting help
To see [User Manual](https://dreamli1314.github.io/angboot/).

## 5. License
AngBoot is Open Source software released under the Apache 2.0 license.
