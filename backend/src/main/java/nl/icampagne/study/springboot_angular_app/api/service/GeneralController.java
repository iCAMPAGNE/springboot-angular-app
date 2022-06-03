package nl.icampagne.study.springboot_angular_app.api.service;

import io.reactivex.Observable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nl.icampagne.study.springboot_angular_app.services.OverviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class GeneralController {
    private Version version;
    private OverviewService overviewService;

    @Autowired
    GeneralController(final OverviewService overviewService, final Version version) {
        this.overviewService = overviewService;
        this.version = version;
    }

    @RequestMapping(value="/version", method = RequestMethod.GET)
    public ResponseEntity<Version> getVersion() {
        return ResponseEntity.ok().body(version);
    }

    @GetMapping(value = "/overview", produces = "application/json")
    public ResponseEntity getOverview() {
        return ResponseEntity.ok().body(overviewService.getOverview());
    }

    @GetMapping(value = "/comments", produces = "application/json")
    public Observable<String> getComment() {
        return Observable.just("Een", "Twee");
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
