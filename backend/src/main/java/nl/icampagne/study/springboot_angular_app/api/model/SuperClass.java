package nl.icampagne.study.springboot_angular_app.api.model;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.experimental.SuperBuilder;
import lombok.extern.jackson.Jacksonized;

@Data
@Jacksonized
@SuperBuilder(toBuilder = true)
public class SuperClass {
    private Integer id;
    private LocalDateTime submitted;
    private String type;
}
