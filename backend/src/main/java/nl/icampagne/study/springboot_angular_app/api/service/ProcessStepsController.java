package nl.icampagne.study.springboot_angular_app.api.service;

import java.util.List;

import nl.icampagne.study.springboot_angular_app.api.model.ProcessStepForm;
import nl.icampagne.study.springboot_angular_app.models.ProcessStep;
import nl.icampagne.study.springboot_angular_app.services.ProcessStepsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProcessStepsController {
  private final ProcessStepsService processStepsService;

  @Autowired
  ProcessStepsController(ProcessStepsService processStepsService) {
    this.processStepsService = processStepsService;
  }

  @GetMapping(value="/process-steps")
  public ResponseEntity<List<ProcessStep>> getProcessSteps() {
    return ResponseEntity.ok().body(processStepsService.retrieveProcessSteps());
  }

  @PostMapping(value = "/process-step")
  public ResponseEntity<String> storeProcessStep(@RequestBody final ProcessStepForm processStepForm) {
    final String resultText = processStepsService.storeProcessStep(processStepForm);
    return ResponseEntity.ok("{\"result\": \"" + resultText + "\"}");
  }

  @GetMapping(value = "/process-steps-count")
  public ResponseEntity<Integer> numberOfProcessSteps() {
    return  ResponseEntity.ok().body(processStepsService.numberOfSteps());
  }
}
