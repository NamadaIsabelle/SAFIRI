package com.safiri.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.safiri.model.Incident;
import com.safiri.repository.IncidentRepository;

@RestController
@RequestMapping("/api/incidents")
@CrossOrigin(origins = "http://localhost:5173")
public class IncidentController {

    private final IncidentRepository incidentRepository;

    public IncidentController(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    @GetMapping
    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Incident> getIncident(@PathVariable Long id) {
        return incidentRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Incident createIncident(@RequestBody Incident incident) {
        return incidentRepository.save(incident);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Incident> updateIncident(
            @PathVariable Long id,
            @RequestBody Incident updatedIncident) {

        return incidentRepository.findById(id)
                .map(existing -> {

                    existing.setType(updatedIncident.getType());
                    existing.setDescription(updatedIncident.getDescription());
                    existing.setPriority(updatedIncident.getPriority());
                    existing.setLatitude(updatedIncident.getLatitude());
                    existing.setLongitude(updatedIncident.getLongitude());
                    existing.setAssignedOfficer(updatedIncident.getAssignedOfficer());
                    existing.setEta(updatedIncident.getEta());
                    existing.setStatus(updatedIncident.getStatus());

                    return ResponseEntity.ok(
                            incidentRepository.save(existing)
                    );
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIncident(@PathVariable Long id) {

        if (!incidentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        incidentRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}