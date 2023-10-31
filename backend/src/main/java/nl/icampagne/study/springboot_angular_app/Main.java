package nl.icampagne.study.springboot_angular_app;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class Main extends SpringBootServletInitializer {

    public static void main(String[] args) {
        System.setProperty("server.servlet.context-path", "/springboot-angular-app");

        SpringApplication.run(Main.class, args);
        try {
            openHomePage();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void openHomePage() throws IOException {
        Runtime rt = Runtime.getRuntime();
        rt.exec("rundll32 url.dll,FileProtocolHandler " + "http://localhost:8092/springboot-angular-app");
    }
}
