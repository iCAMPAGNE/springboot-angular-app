package nl.icampagne.study.springboot_angular_app.pojos;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class ConvertTextfileToInserts {
  public static void main(String[] args) {
    String tableName = "afwijsreden";
    try {
      List<String> allLines = Files.readAllLines(Paths.get(String.format("D:%sDownloads%sVV-10385 afwijsredenen uit Story.txt", File.separator, File.separator)));

      StringBuilder stringBuilder = new StringBuilder();
      int id = 11;
      int index = 0;
      Set<String> rollbackCodes = new TreeSet<>();
      for (String line : allLines) {
        index++;
        String[] column = line.split("\t");
        String einddatum = "sysdate van insert".equals(column[3]) ? "now()" : "null";
        String insertRecord = index == 1 ?
            String.format("INSERT INTO %s (Id, %s, %s, %s, %s, %s) VALUES\r\n", tableName, column[0], column[1], column[2], column[3], column[4])
            : String.format("(%d, '%s', '%s', '%s', %s, '%s')%s\r\n", id, column[0], column[1], column[2], einddatum, column[4],
            (index >= allLines.size() ? ";" : ","));
        stringBuilder.append(insertRecord);
        rollbackCodes.add(column[0]);
        id++;
      }

      index = 0;
      stringBuilder.append(String.format("DELETE FROM %s where Code in (", tableName));
      for (String code : rollbackCodes) {
        index++;
        if (index <= 1) {
          continue;
        }
        stringBuilder.append(String.format("'%s'%s", code, index >= rollbackCodes.size() ? ");" : ","));
      }
      System.out.println(stringBuilder);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
