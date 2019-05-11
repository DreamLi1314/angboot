## Manual
### Foreword

Before installing and using this product, you should have installed the following software and configure the corresponding environment variables:
- JDK: version >= 1.8
- Ant
- Maven
- Node(npm)
- Angular-cli(ng)

### Download the app source

You can download this app source on [GitHub](https://github.com/DreamLi1314/sree).

### Start up the application
First you should perform an init once to install the dependencies needed for your project, but only if you need it on the first boot.
``` ant
ant rebuild-all
```
After each start, you only need to run the following command to start the application:
```ant
ant server
```

### Modify the code for yourself
When you modify the source code, you can execute the following command to compile the source code:
```ant
ant build
```
If you only modified the java code, you can also compile the Java source code and launch the application by executing the following command:
```ant
ant server -Dskip.angular=true
```
Of course, our Angular code also supports hot deployment. Execute the following command and refresh the browser after successful compilation to apply the modified code:
```ant
ant watch
```

### Rebuild and clean the application
#### Clean
You can use the following command to clean up the program output file:
```ant
ant clean
```

#### Rebuild
You can rebuild your code with the following command if needed, for example: When you encounter a cache that is not easy to clean:
```ant
ant rebuild
```

Similarly, you can also rebuild all external code (node dependencies) with the following command:
```ant
ant rebuild-all
```
