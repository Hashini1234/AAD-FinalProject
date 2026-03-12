package org.example.backend.dto;

import lombok.*;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class UpdateUserDTO {
    private Long userId;

    private String username;

    private String email;

    private String phone;
    private String oldPassword;
    private String newPassword;
}

