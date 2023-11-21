# SpringbootAngularApp
Example of a full-stack application using Java 17, Spring Boot 3, REST, Angular 16.

# How to build and run the application
In root folder: `mvn clean install`

In sub-folder backend: `export SERVER_PORT=8092; mvn spring-boot:run`
or `mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Dserver.port=8092"`

A browser(tab) will open automatically with address url: http://localhost:8092/

The frontend can be started separately, 

in sub-folder frontend: `ng serve --proxy-config proxy.conf.json -o`

or just `npm start`
or just: `ng start`