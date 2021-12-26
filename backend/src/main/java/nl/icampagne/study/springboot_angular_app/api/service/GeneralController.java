package nl.icampagne.study.springboot_angular_app.api.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class GeneralController {
    private Version version;

    @Autowired
    GeneralController(final Version version) {
        this.version = version;
    }

    @RequestMapping(value="/version", method = RequestMethod.GET)
    public ResponseEntity<Version> getVersion() {
        return ResponseEntity.ok().body(version);
    }
}

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
class Version {
    private String version = "0.0.2";
}
