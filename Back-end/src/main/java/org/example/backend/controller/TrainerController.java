package org.example.backend.controller;

import org.example.backend.dto.TrainerDTO;
import org.example.backend.service.TrainerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trainers")
@CrossOrigin
public class TrainerController {

    private final TrainerService trainerService;

    // ✅ Constructor Injection
    public TrainerController(TrainerService trainerService) {
        this.trainerService = trainerService;
    }

    @PostMapping
    public TrainerDTO saveTrainer(@RequestBody TrainerDTO dto){
        return trainerService.saveTrainer(dto);
    }

    @GetMapping
    public List<TrainerDTO> getAll(){
        return trainerService.getAllTrainers();
    }

    @PutMapping("/{id}")
    public TrainerDTO updateTrainer(@PathVariable Long id,
                                    @RequestBody TrainerDTO dto){
        return trainerService.updateTrainer(id,dto);
    }

    @DeleteMapping("/{id}")
    public void deleteTrainer(@PathVariable Long id){
        trainerService.deleteTrainer(id);
    }
}