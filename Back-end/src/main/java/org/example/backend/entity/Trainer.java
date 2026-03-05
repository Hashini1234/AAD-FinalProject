package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "trainers")
public class Trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String specialty;

    private int experience;

    private String phone;

    @Column(length = 500)
    private String bio;

    private double rating;

    private int sessions;

    private String status; // available , busy
}