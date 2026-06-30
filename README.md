# 🚦 SAFIRI

## Smart Automated Flow, Incident Response & Intelligence

> **An Intelligent Transport System (ITS) platform for smart traffic management, rapid incident response, and infrastructure simulation.**

---

# Overview

SAFIRI is a next-generation Intelligent Traffic Management System (ITMS) prototype designed to improve traffic operations, emergency response, and road safety within modern smart cities.

Unlike traditional navigation applications, SAFIRI focuses on the **traffic management layer**—providing a centralized command platform where operators can monitor road conditions, verify incidents, coordinate emergency response, and manage intelligent road infrastructure.

The project is inspired by Kenya's ongoing Smart Traffic Management initiatives and explores how Artificial Intelligence, IoT, Computer Vision, and Digital Twins can improve urban mobility.

---

# Vision

SAFIRI aims to become a digital twin of a smart city's transport ecosystem by connecting:

- 🚦 Smart Traffic Signals
- 📷 CCTV Cameras
- 🚔 Traffic Police
- 🚑 Emergency Services
- 📡 IoT Road Sensors
- 📱 Citizens
- 🤖 Artificial Intelligence

into one intelligent platform capable of making rapid, evidence-based traffic management decisions.

---

# Current Features

## 🖥 Command Center Dashboard

- Modern cyberpunk-inspired interface
- Interactive Google Maps integration
- Live traffic monitoring
- Responsive layout
- Collapsible navigation sidebar

---

## 🚨 Incident Management

- Report incidents directly on the map
- Priority classification
  - High
  - Medium
  - Low
- Automatic timestamps
- Live incident feed
- Incident history
- Incident resolution workflow

---

## 🚔 Officer Deployment

- Automatic officer assignment
- Estimated response times (ETA)
- Live deployment panel
- Officer availability tracking
- Incident resolution updates

---

## 📊 Live Statistics

Dashboard statistics automatically update in real time:

- Active incidents
- Officers deployed
- Congestion alerts

---

## 🗺 Interactive GIS Map

- Google Maps API
- Click-to-report incidents
- Incident markers
- Marker information windows
- Live updates

---

# Incident Verification Engine (Planned)

One of SAFIRI's primary goals is reducing false reports without slowing emergency response.

Rather than immediately dispatching officers for every report, incidents move through a confidence-based verification system.

```
Citizen Report
      │
      ▼
Evidence Collection
      │
      ▼
AI Verification Engine
      │
      ▼
Confidence Score
      │
      ▼
Dispatch Decision
```

The verification engine combines evidence from multiple independent sources before making decisions.

### Evidence Sources

- 📷 Uploaded photos
- 🎥 Video evidence
- 📍 GPS location
- 🕒 Timestamp
- 🚦 Traffic sensors
- 📷 CCTV cameras
- 🚗 Traffic flow analysis
- 👥 Nearby citizen reports

---

## Confidence Levels

| Confidence | Action |
|------------|---------|
| 0–30% | Monitor |
| 30–60% | Request additional evidence |
| 60–85% | Notify nearby officers |
| 85–100% | Automatic dispatch |

This allows SAFIRI to remain responsive while minimizing false positives.

---

## Reporter Trust Score

Each citizen gradually earns a credibility score based on historical reports.

Example:

```
Reports Submitted: 84

Verified Reports: 81

False Reports: 3

Trust Score: 96%
```

Trusted users require less verification than new or unreliable reporters.

---

## AI Evidence Fusion (Future)

Rather than relying on a single source, SAFIRI combines multiple inputs to estimate incident confidence.

```
Citizen Report
        +
Computer Vision
        +
Traffic Sensors
        +
GPS Density
        +
Nearby Reports
        +
Historical Traffic Data
        +
CCTV Analysis

↓

Confidence Score

↓

Dispatch Decision
```

---

# Smart Infrastructure Simulation

SAFIRI will include a Digital Twin built using Autodesk Tinkercad to simulate intelligent road infrastructure.

Planned components include:

- 🚦 Smart Traffic Lights
- 📷 CCTV Cameras
- 🚗 Vehicle Detection Sensors
- 🚶 Pedestrian Crossing Sensors
- 🚨 Emergency Call Buttons
- 🌧 Environmental Sensors
- 📡 Traffic Density Sensors
- 🪧 Variable Message Signs

These devices will communicate with the backend in real time, allowing demonstrations of how smart infrastructure interacts with the command center.

---

# Artificial Intelligence Roadmap

Future AI capabilities include:

- Accident detection
- Vehicle detection
- Traffic congestion prediction
- Emergency vehicle recognition
- Route optimization
- Traffic signal optimization
- Object detection
- Predictive analytics

Potential technologies:

- OpenCV
- YOLO
- PyTorch
- Hugging Face
- Python

---

# Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Google Maps API

## Backend (In Progress)

- FastAPI
- PostgreSQL
- REST API
- WebSockets

## Simulation

- Autodesk Tinkercad
- Arduino
- Virtual IoT Sensors

## AI

- Python
- OpenCV
- YOLO
- PyTorch
- Hugging Face

---

# System Architecture

```
                   Smart Infrastructure

     Traffic Lights   CCTV   IoT Sensors   Citizens

             │          │          │          │

             └──────────┼──────────┘

                        ▼

             SAFIRI Verification Engine

                        ▼

                 FastAPI Backend

                        ▼

          SAFIRI Traffic Command Center

      ┌──────────┬───────────┬──────────┐

 Traffic Ops   Police Units  Emergency Services
```

---

# Development Progress

## ✅ Completed

- Interactive dashboard
- Google Maps integration
- Incident reporting
- Incident timeline
- Officer assignment
- Officer deployment
- ETA estimation
- Incident status workflow
- Responsive cyberpunk UI

---

## 🚧 In Progress

- Backend API
- Database integration
- User dashboard
- Infrastructure simulation
- Traffic light simulation

---

## 🔮 Planned

- AI verification engine
- Computer vision
- IoT integration
- Live sensor streaming
- Mobile applications
- Analytics dashboard
- Predictive traffic modelling

---

# Roadmap

## Phase 1

- Dashboard
- Google Maps
- Incident Management
- Officer Deployment

## Phase 2

- Backend API
- Database
- Smart Infrastructure Simulation
- Traffic Signals

## Phase 3

- Computer Vision
- AI Verification Engine
- Traffic Prediction
- Sensor Streaming

## Phase 4

- Mobile Applications
- Citizen Portal
- Smart City Digital Twin
- Advanced Analytics

---

# Research Inspiration

SAFIRI is inspired by modern Intelligent Transport Systems (ITS) being deployed globally and ongoing smart traffic initiatives in Kenya, including:

- Intelligent Traffic Signal Systems
- Centralized Traffic Management Centres
- CCTV-assisted traffic monitoring
- Smart city infrastructure
- Connected road sensors

The project explores how these technologies could be integrated into a unified platform.

---

# Disclaimer

SAFIRI is an academic and research prototype.

It is **not affiliated with or endorsed by**:

- Kenya Urban Roads Authority (KURA)
- National Transport and Safety Authority (NTSA)
- National Police Service (NPS)
- Nairobi City County

References to these organizations are purely conceptual and intended for research and demonstration purposes.

---

# Author

**Risper Namada**

🇰🇪 Built in Kenya

*"Designing intelligent transport systems for the future of African cities."*
