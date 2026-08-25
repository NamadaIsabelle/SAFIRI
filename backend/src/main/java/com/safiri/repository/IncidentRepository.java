package com.safiri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safiri.model.Incident;

public interface IncidentRepository extends JpaRepository<Incident, Long> {
}