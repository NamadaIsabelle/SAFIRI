package com.safiri.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
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

    // GET all incidents
    @GetMapping
    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    // GET one incident
    @GetMapping("/{id}")
    public ResponseEntity<Incident> getIncidentById(@PathVariable Long id) {

        Optional<Incident> incident = incidentRepository.findById(id);

        return incident
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // CREATE incident
    @PostMapping
    public ResponseEntity<Incident> createIncident(@RequestBody Incident incident) {

        Incident savedIncident = incidentRepository.save(incident);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedIncident);
    }

    // UPDATE incident
    @PutMapping("/{id}")
    public ResponseEntity<Incident> updateIncident(
            @PathVariable Long id,
            @RequestBody Incident updatedIncident) {

        Optional<Incident> existingIncident =
                incidentRepository.findById(id);

        if (existingIncident.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Incident incident = existingIncident.get();

        incident.setType(updatedIncident.getType());
        incident.setDescription(updatedIncident.getDescription());
        incident.setPriority(updatedIncident.getPriority());
        incident.setLatitude(updatedIncident.getLatitude());
        incident.setLongitude(updatedIncident.getLongitude());
        incident.setAssignedOfficer(updatedIncident.getAssignedOfficer());
        incident.setEta(updatedIncident.getEta());
        incident.setStatus(updatedIncident.getStatus());

        Incident savedIncident = incidentRepository.save(incident);

        return ResponseEntity.ok(savedIncident);
    }

    // DELETE incident
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIncident(@PathVariable Long id) {

        if (!incidentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        incidentRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}