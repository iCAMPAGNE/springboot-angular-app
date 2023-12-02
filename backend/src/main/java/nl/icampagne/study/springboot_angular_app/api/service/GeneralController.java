package nl.icampagne.study.springboot_angular_app.api.service;

import java.io.IOException;
import java.util.Properties;

import io.reactivex.Observable;
import nl.icampagne.study.springboot_angular_app.api.model.Version;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class GeneralController {
    private final Properties projectProperties = new Properties();
    private final Properties buildProperties = new Properties();

    GeneralController() {
        try {
            projectProperties.load(getClass().getClassLoader().getResourceAsStream("project.properties"));
            buildProperties.load(getClass().getClassLoader().getResourceAsStream("META-INF/build-info.properties"));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping(value = "/version", produces = "application/json")
    public ResponseEntity<Version> getVersion() {
        final Version version = new Version(projectProperties.getProperty("version"), buildProperties.getProperty("build.time"));
        return ResponseEntity.ok().body(version);
    }

    @GetMapping("/info")
    public ResponseEntity<String> getInfo() {
        final String info = "Public OK";
        return ResponseEntity.ok("{\"info\": \"" + info + "\"}");
    }

    @GetMapping(value = "/comments", produces = "application/json")
    public Observable<String> getComment() {
        return Observable.just("Een", "Twee");
    }
}
