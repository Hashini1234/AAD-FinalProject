package org.example.backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TrainerDTO {

    private Long id;
    private String name;
    private String email;
    private String phone;
    private String specialty;
    private int experience;
    private double rating;
    private int sessions;
    private String status;
    private String bio;
}