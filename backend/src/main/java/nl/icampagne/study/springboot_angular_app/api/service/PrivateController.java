package nl.icampagne.study.springboot_angular_app.api.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/private")
public class PrivateController {

  @GetMapping("/login")
  public ResponseEntity<String> getInfo() {
    final String info = "OK";
    return ResponseEntity.ok("{\"login\": \"" + info + "\"}");
  }

  @GetMapping("greeting")
  public ResponseEntity<String> getPrivateGreeting() {
    return ResponseEntity.ok("{\"greeting\": \"Hello private\"}");
  }
}
