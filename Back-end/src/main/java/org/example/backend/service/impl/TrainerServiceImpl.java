package org.example.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.TrainerDTO;
import org.example.backend.entity.Trainer;
import org.example.backend.repository.TrainerRepository;
import org.example.backend.service.TrainerService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TrainerServiceImpl implements TrainerService {

    private final TrainerRepository trainerRepository;

    @Override
    public TrainerDTO saveTrainer(TrainerDTO dto) {

        Trainer trainer = Trainer.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .phone(dto.getPhone())
                .specialty(dto.getSpecialty())
                .experience(dto.getExperience())
                .rating(dto.getRating())
                .sessions(dto.getSessions())
                .status(dto.getStatus())
                .bio(dto.getBio())
                .build();

        trainerRepository.save(trainer);

        dto.setId(trainer.getId());
        return dto;
    }

    @Override
    public List<TrainerDTO> getAllTrainers() {
        return trainerRepository.findAll()
                .stream()
                .map(t -> TrainerDTO.builder()
                        .id(t.getId())
                        .name(t.getName())
                        .email(t.getEmail())
                        .phone(t.getPhone())
                        .specialty(t.getSpecialty())
                        .experience(t.getExperience())
                        .rating(t.getRating())
                        .sessions(t.getSessions())
                        .status(t.getStatus())
                        .bio(t.getBio())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public TrainerDTO updateTrainer(Long id, TrainerDTO dto) {

        Trainer trainer = trainerRepository.findById(id).orElseThrow();

        trainer.setName(dto.getName());
        trainer.setEmail(dto.getEmail());
        trainer.setPhone(dto.getPhone());
        trainer.setSpecialty(dto.getSpecialty());
        trainer.setExperience(dto.getExperience());
        trainer.setRating(dto.getRating());
        trainer.setSessions(dto.getSessions());
        trainer.setStatus(dto.getStatus());
        trainer.setBio(dto.getBio());

        trainerRepository.save(trainer);

        return dto;
    }

    @Override
    public void deleteTrainer(Long id) {
        trainerRepository.deleteById(id);
    }
}