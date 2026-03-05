package org.example.backend.service;

import org.example.backend.dto.TrainerDTO;

import java.util.List;

public interface TrainerService {

    TrainerDTO saveTrainer(TrainerDTO dto);

    List<TrainerDTO> getAllTrainers();

    TrainerDTO updateTrainer(Long id, TrainerDTO dto);

    void deleteTrainer(Long id);
}