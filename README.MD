# Hospital Management System Backend Project

This is the **backend** for the Hospital Management System, built using **Node.js**, **Express**, and **MongoDB**.  
The backend follows a **microservices architecture**, ensuring performance, flexibility, and ease of maintenance.  
Each microservice handles a specific domain such as **authentication**, **patient records**, **staff**, **appointments**, **emergency**, and **ward coordination**.

---

## Key System Requirements

The system is developed considering the following software quality goals:

- **Elasticity**:   Handles high loads and emergency surges.
- **Adaptability**: Easily extendable for future modules.
- **Reliability**:  Minimum downtime with modular isolation.
- **Performance**:  Fast responses under high concurrency.
- **Scalability**:  Ready for expanding user and data load.
- **Simplicity** :  RESTful APIs with clear interface definitions.
- **Modularity** :  Each service runs independently and is containerized.

---

## Microservices Architecture

Each microservice is deployed independently with its own MongoDB database:

| Microservice         | Description                                         | Port (Internal) |
|----------------------|-----------------------------------------------------|-----------------|
| **auth-service**     | Login, registration, JWT authentication             | `3000`          |
| **patient-portal**   | Manage patient profiles, medical history            | `3002`          |
| **staff-operations** | Manage doctors, staff schedules, ward assignments   | `3003`          |
| **appointment-manager** | Create, update, cancel appointments              | `3004`          |
| **ward-coordinator** | Bed assignments, ward status                        | `3005`          |
| **emergency-response** | Manage emergency incidents and status updates     | `3006`          |

> Each service uses its own MongoDB URI from Atlas for data separation.

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Shoaiibahmed/HMS.git
cd HMS-Backend
```
### 2. Run with Docker Compose
```bash
docker-compose up --build
```

## Service Structure

### auth-service/
Handles user authentication (login, registration, forgot password, JWT).

- **Entry Point**: `index.js`  
- **Routes**: `routes/auth.routes.js`  
- **Controllers**: `controllers/auth.controller.js`  
- **MongoDB Config**: `config/db.js`

### patient-portal/
Manages patient accounts and medical records.

- **Entry Point**: `app.js`  
- **Routes**: `routes/patient.routes.js`  
- **Controllers**: `controllers/patient.controller.js`  
- **Models**: `models/patient.model.js`  
- **MongoDB Config**: `config/db.js`

### staff-operations/
Handles hospital staff, doctor profiles, and scheduling.

- **Entry Point**: `app.js`  
- **Routes**: `routes/staffRoutes.js`  
- **Controllers**: `controllers/staffController.js`  
- **Models**: `models/staff.js`  
- **MongoDB Config**: `config/db.js`

### appointment-manager/
Allows patients and staff to book, modify, or cancel appointments.

- **Entry Point**: `app.js`  
- **Routes**: `routes/appointmentRoutes.js`  
- **Controllers**: `controllers/appointmentController.js`  
- **Models**: `models/appointment.js`  
- **MongoDB Config**: `config/db.js`

### ward-coordinator/
Manages ward assignments, bed availability, and coordination.

- **Entry Point**: `app.js`  
- **Routes**: `routes/wardRoutes.js`  
- **Controllers**: `controllers/wardController.js`  
- **Models**: `models/Ward.js`  
- **MongoDB Config**: `config/db.js`

### emergency-response/
Tracks and updates real-time emergency reports within the hospital.

- **Entry Point**: `app.js`  
- **Routes**: `routes/emergencyRoutes.js`  
- **Controllers**: `controllers/emergencyController.js`  
- **Models**: `models/emergency.js`  
- **MongoDB Config**: `config/db.js`

## Docker & Deployment
- Each microservice has its own Dockerfile
- The root has a docker-compose.yml that orchestrates all services.

To stop all services:
```bash
docker-compose down
```
## Conclusion
- This backend project offers:
- Modular microservices
- Dockerized services
- Clean REST APIs
- MongoDB separation
- Easy scaling and maintainability
