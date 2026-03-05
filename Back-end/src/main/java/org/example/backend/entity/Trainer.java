package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String phone;

    private String specialty;

    private int experience;

    private double rating;

    private int sessions;

    private String status; // available / busy

    @Column(length = 1000)
    private String bio;
}