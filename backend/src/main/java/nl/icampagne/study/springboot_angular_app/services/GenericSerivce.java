package nl.icampagne.study.springboot_angular_app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class GenericSerivce {
  @Autowired
  private Environment environment;

  public String getVersion() {
    return environment.getProperty("version");
  }
}
