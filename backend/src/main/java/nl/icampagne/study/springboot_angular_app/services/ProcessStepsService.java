package nl.icampagne.study.springboot_angular_app.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import nl.icampagne.study.springboot_angular_app.api.model.ProcessStepForm;
import nl.icampagne.study.springboot_angular_app.models.ProcessStep;
import org.springframework.stereotype.Service;

@Service
public class ProcessStepsService {
  private static Logger LOGGER;

  private final List<ProcessStep> processStepList = new ArrayList<>();

  ProcessStepsService() {
    processStepList.addAll(
        List.of(
//            new ProcessStep(1L, LocalDateTime.now(), "Eerste stap", false),
//            new ProcessStep(2L, LocalDateTime.now(), "Tweede stap", false),
//            new ProcessStep(3L, LocalDateTime.now(), "Derde stap, deze stap is verplicht", true),
//            new ProcessStep(4L, LocalDateTime.now(), "Vierde stap", false),
//            new ProcessStep(5L, LocalDateTime.now(), "Vijfde stap, deze stap is verplicht", true),
            new ProcessStep(6L, LocalDateTime.now(), "Zesde stap, deze stap is verplicht", true)
        )
    );
  }

  public List<ProcessStep> retrieveProcessSteps() {
    try {
      Thread.sleep(3000);
    } catch (InterruptedException e) {
      throw new RuntimeException(e);
    }
    return processStepList;
  }

  public String storeProcessStep(final ProcessStepForm processStepForm) {
    final ProcessStep processStep =
        new ProcessStep(processStepList.size() + 1L, LocalDateTime.now(), processStepForm.getDescription(), processStepForm.getMandatory());
    processStepList.add(processStepForm.getOrder(), processStep);
    try {
      Thread.sleep(2000);
    } catch (InterruptedException e) {
      throw new RuntimeException(e);
    }
    return "Proces stap succesvol toegevoegd.";
  }

  public Integer numberOfSteps() {
    return processStepList.size();
  }
}
