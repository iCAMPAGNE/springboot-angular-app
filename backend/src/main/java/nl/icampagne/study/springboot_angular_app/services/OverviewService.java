package nl.icampagne.study.springboot_angular_app.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.stereotype.Service;

@Service
public class OverviewService {
    private static Logger LOGGER;

    public List<String> getOverview() {
        return Arrays.asList(new String[] { "First", "Second", "Third", "Fourth" });
    }
}
