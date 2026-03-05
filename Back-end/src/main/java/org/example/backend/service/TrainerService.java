package org.example.backend.service;

import org.example.backend.entity.Trainer;
import org.example.backend.repository.TrainerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainerService {

    private final TrainerRepository trainerRepository;

    public TrainerService(TrainerRepository trainerRepository) {
        this.trainerRepository = trainerRepository;
    }

    public Trainer saveTrainer(Trainer trainer){
        return trainerRepository.save(trainer);
    }

    public List<Trainer> getAllTrainers(){
        return trainerRepository.findAll();
    }

    public Trainer getTrainerById(Long id){
        return trainerRepository.findById(id).orElse(null);
    }

    public Trainer updateTrainer(Long id, Trainer trainer){

        Trainer t = trainerRepository.findById(id).orElseThrow();

        t.setName(trainer.getName());
        t.setEmail(trainer.getEmail());
        t.setSpecialty(trainer.getSpecialty());
        t.setExperience(trainer.getExperience());
        t.setPhone(trainer.getPhone());
        t.setBio(trainer.getBio());
        t.setRating(trainer.getRating());
        t.setSessions(trainer.getSessions());
        t.setStatus(trainer.getStatus());

        return trainerRepository.save(t);
    }

    public void deleteTrainer(Long id){
        trainerRepository.deleteById(id);
    }
}