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
    private Long userId;

    private String username;   // used as Full Name in UI

    private String password;   // BCrypt encrypted

    @Column(unique = true)
    private String email;      // Add Trainer modal — Email field

    private String phone;      // Add Trainer modal — Phone field

    private String  role;         // ADMIN / USER / TRAINER

}