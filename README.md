# SpringbootAngularApp
Example of a full-stack application using Java, Spring Boot, REST, Angular 12.

# How to build and run the application
In root folder: `mvn clean install`

In sub-folder backend: `export SERVER_PORT=8092; mvn spring-boot:run`

A browser(tab) will open automatically and address url: http://localhost:8092/

The frontend can be started separately, 

in sub-folder frontend: `ng serve --proxy-config proxy.conf.json -o`

or just: `ng start`