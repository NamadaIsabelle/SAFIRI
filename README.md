# 🚦 SAFIRI

## Smart Automated Flow, Incident Response & Intelligence

*A Smart Traffic Management and Intelligent Transport System (ITS) platform designed to improve urban mobility, incident response, and traffic operations in Kenya.*

---

# Overview

SAFIRI is an Intelligent Traffic Management System (ITMS) prototype that demonstrates how modern road infrastructure, emergency response, and smart city technologies can work together to improve traffic flow and public safety.

Rather than focusing only on navigation, SAFIRI provides a centralized command platform where traffic operators can monitor incidents, coordinate emergency response, manage road infrastructure, and visualize traffic conditions in real time.

The long-term vision is to complement Kenya's ongoing Intelligent Transport System (ITS) initiatives by providing a digital platform capable of integrating traffic infrastructure, IoT devices, AI-assisted monitoring, and emergency services.

---

# Inspiration

Kenya's major cities continue to experience:

- Heavy traffic congestion
- Slow incident response
- Limited coordination between agencies
- Increasing pressure on traffic officers
- Growing demand for smart city infrastructure

Recent investments in Nairobi's Intelligent Transport System (ITS), including smart traffic signals, CCTV cameras, and centralized Traffic Management Centres, demonstrate the country's move toward digital traffic management.

SAFIRI explores how these technologies could work together inside one intelligent platform.

---

# Current Features

## Interactive Traffic Dashboard

- Live command center interface
- Cyberpunk-inspired smart city UI
- Responsive dashboard
- Google Maps integration

---

## Incident Management

- Report incidents directly on the map
- Automatic incident timeline
- Priority classification
  - High
  - Medium
  - Low
- Timestamped incident history

---

## Officer Dispatch

- Automatic officer assignment
- Officer availability tracking
- Dynamic ETA generation
- Active deployment panel
- Officer status management

---

## Incident Workflow

Every incident follows a response lifecycle:

```
Incident Reported
        │
        ▼
Officer Assigned
        │
        ▼
Dispatched
        │
        ▼
Resolved
```

Resolved incidents automatically:

- update dashboard statistics
- release assigned officers
- remain in the incident history

---

## Interactive Map

- Google Maps API
- Click-to-report incidents
- Incident markers
- Marker information popups
- Real-time map updates

---

# Planned Smart Infrastructure Simulation

One of SAFIRI's major goals is to simulate an Intelligent Transport System using Autodesk Tinkercad.

The simulation will demonstrate communication between physical traffic infrastructure and the dashboard.

Planned components include:

- Smart Traffic Lights
- CCTV Cameras
- Vehicle Detection Sensors
- Emergency Buttons
- Pedestrian Crossing Sensors
- Traffic Density Sensors
- Environmental Sensors
- Variable Message Signs (VMS)

These components will generate simulated events that trigger actions inside the SAFIRI dashboard.

Example:

```
Traffic Sensor
      │
      ▼
Vehicle Collision Detected
      │
      ▼
Backend Receives Event
      │
      ▼
Incident Created
      │
      ▼
Officer Assigned
      │
      ▼
Traffic Signal Override
```

---

# Future AI Features

Artificial Intelligence is planned as a future enhancement.

Potential capabilities include:

- Automatic accident detection
- Traffic congestion prediction
- CCTV object detection
- Emergency vehicle recognition
- Traffic signal optimization
- Route recommendation
- Predictive analytics

The AI system may leverage:

- OpenCV
- YOLO
- PyTorch
- Hugging Face
- Historical traffic datasets

---

# System Architecture

```
                 Road Infrastructure
                         │
 ┌───────────────────────┼────────────────────────┐
 │                       │                        │
Traffic Lights     CCTV Cameras         IoT Sensors
 │                       │                        │
 └───────────────┬───────┴──────────────┬─────────┘
                 │
                 ▼
      Autodesk Tinkercad Simulation
                 │
                 ▼
            FastAPI Backend
                 │
                 ▼
      SAFIRI Command Dashboard
                 │
      ┌──────────┼───────────┐
      │          │           │
 Traffic     Police     Emergency
Operators     Units      Services
```

---

# Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Google Maps API

---

## Backend (In Progress)

- FastAPI
- REST API
- WebSockets
- PostgreSQL

---

## Simulation

- Autodesk Tinkercad
- Arduino
- Virtual IoT Sensors

---

## AI (Future)

- Python
- OpenCV
- PyTorch
- Hugging Face
- YOLO

---

# Current Development Progress

## Completed

- Interactive dashboard
- Responsive cyberpunk UI
- Google Maps integration
- Incident reporting
- Incident timeline
- Priority management
- Officer deployment
- Officer availability
- Incident resolution workflow
- Dynamic dashboard statistics

---

## In Progress

- Backend API
- Database integration
- Smart infrastructure simulation
- Traffic signal simulation
- Camera simulation

---

## Planned

- AI incident detection
- Live sensor streaming
- Predictive traffic analytics
- Mobile officer application
- Citizen reporting portal
- Digital twin visualization

---

# Project Roadmap

## Phase 1
- Dashboard
- Interactive Map
- Incident Reporting
- Officer Dispatch
- Workflow Management

## Phase 2
- FastAPI Backend
- PostgreSQL
- IoT Simulation
- Traffic Infrastructure Simulation

## Phase 3
- AI Integration
- CCTV Analysis
- Traffic Prediction
- Sensor Streaming

## Phase 4
- Mobile Applications
- Public Information Portal
- Analytics Dashboard
- Smart City Demonstrations

---

# Vision

SAFIRI aims to demonstrate how Intelligent Transport Systems can improve urban mobility by combining:

- Smart infrastructure
- Emergency response
- Data analytics
- IoT devices
- Artificial Intelligence
- Human decision-making

The project serves as a proof-of-concept for future smart city traffic management platforms in Kenya and across Africa.

---

# Disclaimer

SAFIRI is an academic and research prototype.

It is **not affiliated with or endorsed by**:

- Kenya Urban Roads Authority (KURA)
- National Transport and Safety Authority (NTSA)
- National Police Service (NPS)
- Nairobi City County

Any references to government agencies represent potential future integration scenarios for demonstration and research purposes only.

---

# Author

**Risper Namada**

Built in Kenya 🇰🇪

*"Building intelligent transport solutions for smarter African cities."*
