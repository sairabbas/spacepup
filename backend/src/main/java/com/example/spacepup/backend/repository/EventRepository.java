package com.example.spacepup.backend.repository;

import com.example.spacepup.backend.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
    Event findByName(String name);
}
