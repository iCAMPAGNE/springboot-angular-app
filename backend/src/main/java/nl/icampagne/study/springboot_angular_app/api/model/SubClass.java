package nl.icampagne.study.springboot_angular_app.api.model;

import java.io.IOException;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.experimental.SuperBuilder;
import lombok.extern.jackson.Jacksonized;

@Data
@Jacksonized
@SuperBuilder(toBuilder = true)
public class SubClass extends SuperClass {
    private String subject;
    private String description;
    private String reply;

    public static void main(String[] args) throws IOException {
        SubClass subClass = SubClass.builder().id(7).subject("Hallo").build();
        System.out.println(String.format("%d %s", subClass.getId(), subClass.getSubject()));

        SubClass subClass2 = new ObjectMapper().readValue("{ \"id\" : 200, \"description\" : \"test\"}", SubClass.class);
        System.out.println(String.format("%d %s", subClass2.getId(), subClass2.getDescription()));
    }
}
