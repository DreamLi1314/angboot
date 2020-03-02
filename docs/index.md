# Manual
## 1.Foreword

### 1.1 Pre-Condition
Before installing and using this product, you should have installed the following software and configure the corresponding environment variables:
- JDK: version >= 1.8

### 1.2 Download the app source

You can download this app source on [GitHub](https://github.com/DreamLi1314/angboot).

## 2. Build Project
### 2.1 Start up the application
First you should perform an init once to install the dependencies needed for your project, but only if you need it on the first boot.
``` shell
gradlew[.bat] build
```
After each start, you only need to run the following command to start the application:
``` shell
gradlew[.bat] server
```

### 2.2 Modify the code for yourself
When you modify the source code, you can execute the following command to compile the source code:
``` shell
gradlew[.bat] build
```
If you only modified the java code, you can also compile the Java source code and launch the application by executing the following command:
``` shell
gradlew[.bat] classes
```
Of course, our Angular code also supports hot deployment. Execute the following command and refresh the browser after successful compilation to apply the modified code:
``` shell
gradlew[.bat] watch
```

### 2.3 Rebuild and clean the application
#### 2.3.1 Clean
You can use the following command to clean up the program output file:
``` shell
gradlew[.bat] clean
```

You can use the following command to clean up the program output file(contains node dependencies):
``` shell
gradlew[.bat] cleanAll
```

#### 2.3.2 Rebuild
You can also rebuild external code (node dependencies) with the following command:
``` shell
gradlew[.bat] cleanAll build
```

## 3. Configuration
You need config follow property to `angboot/client/server/build/config/angboot.properties`

### 3.1 Enable CAS for SSO
``` properties
# cas enable
angboot.cas.enabled=true

# cas client configuration
angboot.cas.client.casClientUrlPrefix=http://localhost
angboot.cas.client.service=http://localhost/login/cas
angboot.cas.client.sendRenew=false
angboot.cas.client.filterProcessesUrl=/login/cas
angboot.cas.client.logoutUrl=/logout

# cas server configuration
angboot.cas.server.casServerUrlPrefix=http://localhost:10080/cas
angboot.cas.server.loginUrl=http://localhost:10080/cas/login
angboot.cas.server.logoutUrl=http://localhost:10080/cas/logout
```

### 3.2 Enable Outer Authority For Custom Authority Application
> RPC using Dubbo framework, so your app should based on Dubbo for custom authority.
``` properties
# Enable
angboot.outer.authority.enabled=true
# Dubbo app name
outer.authority.app.name=angboot-client
# Dubbo registry address
outer.authority.app.registry.address=zookeeper://127.0.0.1:2181
# Optional. Dubbo registry username
outer.authority.app.registry.username=xxx
# Optional. Dubbo registry password
outer.authority.app.registry.password
```
> we provide a simple outer authority application. you can find it on [GitHub: angboot-providers/authority](https://github.com/DreamLi1314/angboot-providers/tree/master/authority)

