package org.example.backend.dto;

import jakarta.validation.constraints.*;
import lombok.*;


/*
 *  Inner classes:
 *   CreateRequest  →  "+ Add Trainer" modal  Save button
 *   UpdateRequest  →  ✏️ Edit modal  Save button
 *   Response       →  Grid card + List table render
 *   StatsResponse  →  Stat cards (tTotal / tAvail / tBusy / tAvgRating)
 *   Summary        →  Booking dropdown (lightweight)
 */
public class TrainerDTO {

    // ─────────────────────────────────────────────
    //  CREATE  →  Add New Trainer modal
    //  UI fields: Full Name, Email, Phone (User)
    //             Specialty, Experience, Bio (Trainer)
    // ─────────────────────────────────────────────
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class CreateRequest {

        @NotNull(message = "User ID is required")
        private Long userId;                     // links to existing User

        @NotBlank(message = "Specialty is required")
        private String specialty;                // UI dropdown

        @Min(value = 0, message = "Experience cannot be negative")
        private int experienceYears;             // UI number input

        @Size(max = 1000, message = "Bio is too long")
        private String bio;                      // UI textarea
    }

    // ─────────────────────────────────────────────
    //  UPDATE  →  Edit Trainer modal (same fields)
    // ─────────────────────────────────────────────
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class UpdateRequest {

        @NotBlank(message = "Specialty is required")
        private String specialty;

        @Min(0)
        private int experienceYears;

        @Size(max = 1000)
        private String bio;

        private TrainerStatus status;            // AVAILABLE / BUSY / INACTIVE
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Response {

        private Long   id;

        // from User (shown in card header + modal fields)
        private Long   userId;
        private String name;            // t.name  in UI  → user.username
        private String email;           // modal email field
        private String phone;           // modal phone field

        // trainer specific
        private String        specialty;        // card subtitle
        private int           experienceYears;  // "Yrs Exp." stat
        private double        rating;           // ★ stars
        private int           totalSessions;    // "Sessions" stat
        private String        bio;
        private TrainerStatus status;           // badge color

        private String createdAt;
        private String updatedAt;
    }

    // ─────────────────────────────────────────────
    //  STATS  →  4 stat cards at top of Trainers page
    //   tTotal      = total
    //   tAvail      = available
    //   tBusy       = busy
    //   tAvgRating  = avgRating
    // ─────────────────────────────────────────────
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class StatsResponse {
        private long   total;
        private long   available;
        private long   busy;
        private double avgRating;
    }

    // ─────────────────────────────────────────────
    //  SUMMARY  →  used inside Booking response
    // ─────────────────────────────────────────────
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Summary {
        private Long          id;
        private String        name;
        private String        specialty;
        private TrainerStatus status;
    }
}