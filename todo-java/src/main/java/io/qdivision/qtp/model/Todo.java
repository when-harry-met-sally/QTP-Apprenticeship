package io.qdivision.qtp.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Todo {
    private String id;
    private String description;
    private Boolean completed;
}
