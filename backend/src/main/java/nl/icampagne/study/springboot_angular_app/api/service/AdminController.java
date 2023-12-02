package nl.icampagne.study.springboot_angular_app.api.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

  @GetMapping("/info")
  public ResponseEntity<String> getInfo() {
    final String info = "Admin OK";
    return ResponseEntity.ok("{\"info\": \"" + info + "\"}");
  }
}
