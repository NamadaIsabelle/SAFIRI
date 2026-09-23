package com.safiri.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.safiri.model.Incident;
import com.safiri.repository.IncidentRepository;

@Service
public class IncidentService {

    private final IncidentRepository incidentRepository;

    public IncidentService(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    // Get all incidents
    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    // Get one incident
    public Optional<Incident> getIncidentById(Long id) {
        return incidentRepository.findById(id);
    }

    // Save new incident
    public Incident createIncident(Incident incident) {
        return incidentRepository.save(incident);
    }

    // Update incident
    public Incident updateIncident(Long id, Incident updatedIncident) {

        Incident incident = incidentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incident not found"));

        incident.setType(updatedIncident.getType());
        incident.setDescription(updatedIncident.getDescription());
        incident.setPriority(updatedIncident.getPriority());
        incident.setLatitude(updatedIncident.getLatitude());
        incident.setLongitude(updatedIncident.getLongitude());
        incident.setAssignedOfficer(updatedIncident.getAssignedOfficer());
        incident.setEta(updatedIncident.getEta());
        incident.setStatus(updatedIncident.getStatus());

        return incidentRepository.save(incident);
    }

    // Delete incident
    public void deleteIncident(Long id) {
        incidentRepository.deleteById(id);
    }

    // Resolve incident
    public Incident resolveIncident(Long id) {

        Incident incident = incidentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incident not found"));

        incident.setStatus("Resolved");

        return incidentRepository.save(incident);
    }
}