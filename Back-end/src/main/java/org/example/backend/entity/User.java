package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;   // used as Full Name in UI

    private String password;   // BCrypt encrypted

    private String email;      // Add Trainer modal — Email field

    private String phone;      // Add Trainer modal — Phone field

    @Enumerated(EnumType.STRING)
    private Role role;         // ADMIN / USER / TRAINER

    // Bi-directional link — one User can have one Trainer profile
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Trainer trainer;
}