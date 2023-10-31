package nl.icampagne.study.springboot_angular_app.models;

import java.time.LocalDateTime;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class ProcessStep {
  private Long id;
  private LocalDateTime created;
  private String description;
  private Boolean mandatory;
}
