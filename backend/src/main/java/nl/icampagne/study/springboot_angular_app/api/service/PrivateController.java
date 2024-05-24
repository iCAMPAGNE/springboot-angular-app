package nl.icampagne.study.springboot_angular_app.api.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/private")
public class PrivateController {

  @GetMapping("/login")
  public ResponseEntity<String> login() {
    final String info = "OK";
    return ResponseEntity.ok("{\"login\": \"" + info + "\"}");
  }

  @GetMapping("/logout")
  public ResponseEntity<String> logout() {
    final String info = "OK";
    return ResponseEntity.ok("{\"logout\": \"" + info + "\"}");
  }

  @GetMapping("greeting")
  public ResponseEntity<String> getPrivateGreeting() {
    return ResponseEntity.ok("{\"greeting\": \"Hello private\"}");
  }

  @GetMapping("status")
  public ResponseEntity<String> getPrivateStatus() {
    return ResponseEntity.ok("{\"status\": \"I am fine\"}");
  }
}
