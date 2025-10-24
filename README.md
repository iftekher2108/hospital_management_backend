# 🏥 Hospital Management System API

The **Hospital Management System API** is a complete backend solution for managing hospital operations efficiently. It’s built with **Node.js** and **Express.js**, designed to handle all essential tasks such as managing **users, patients, doctors, departments, and appointments**. 

This project demonstrates how a modern hospital’s digital system works behind the scenes — managing data, communication between entities, and ensuring smooth coordination between patients, doctors, and hospital departments.

---

## 💡 Overview

Hospitals handle tons of data daily — patient records, doctor details, appointments, department updates, and more. This system automates and simplifies those operations by exposing clean, structured RESTful API endpoints.

The backend is modular, meaning each module (User, Patient, Doctor, Appointment, Department) has its own controller and route file, making it easy to maintain and extend.

This project can serve as:
- A **learning resource** for beginners who want to understand Express.js structure.
- A **starter backend** for full-stack healthcare systems.
- A **demo API** for integrating with frontend frameworks like React, Vue, or Next.js.

---

## ✨ Key Features

✅ CRUD (Create, Read, Update, Delete) operations for all modules  
✅ Organized modular file structure  
✅ RESTful JSON-based API responses  
✅ Easy to extend and maintain  
✅ Scalable and developer-friendly architecture  
✅ Ready for frontend integration

---

## 🧩 Folder Structure

```
src/
├── controllers/                # Logic for each API module
│   ├── user.controllers.js
│   ├── patient.controllers.js
│   ├── doctor.controllers.js
│   ├── appointment.controllers.js
│   └── department.controllers.js
│
├── routes/                     # Route definitions for each module
│   ├── user.routes.js
│   ├── patient.routes.js
│   ├── doctor.routes.js
│   ├── appointment.routes.js
│   └── department.routes.js
│
├── models/                     # Database models (if DB added later)
│   ├── User.model.js
│   ├── Patient.model.js
│   ├── Doctor.model.js
│   ├── Appointment.model.js
│   └── Department.model.js
│
└── app.js                      # Main application entry point
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone this Repository
```bash
git clone https://github.com/iftekher2108/hospital_management_backend.git
cd hospital_management_backend

```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Server
```bash
npm start
```

Your server will be running at:  
👉 **http://localhost:3000**

---

## ⚙️ API Endpoints (Detailed)

### 👤 User Management
Manage all hospital users including administrators and system staff.

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/users/` | Get all users |
| POST | `/api/users/` | Create a new user |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user details |
| DELETE | `/api/users/:id` | Delete user |

---

### 🧍 Patient Management
Handle all patient information, including their personal details and assigned doctors.

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/patients/` | Retrieve all patients |
| POST | `/api/patients/` | Register a new patient |
| GET | `/api/patients/:id` | Get patient by ID |
| PUT | `/api/patients/:id` | Update patient record |
| DELETE | `/api/patients/:id` | Remove patient record |

---

### 👨‍⚕️ Doctor Management
Manage hospital doctors, their specialties, and profiles.

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/doctors/` | List all doctors |
| POST | `/api/doctors/` | Add a new doctor |
| GET | `/api/doctors/:id` | Get doctor by ID |
| PUT | `/api/doctors/:id` | Update doctor information |
| DELETE | `/api/doctors/:id` | Delete doctor record |

---

### 🏢 Department Management
Each department (like Cardiology, Neurology, etc.) is managed here.

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/departments/` | List all departments |
| POST | `/api/departments/` | Create a new department |
| GET | `/api/departments/:id` | Get department by ID |
| PUT | `/api/departments/:id` | Update department info |
| DELETE | `/api/departments/:id` | Delete department |

---

### 📅 Appointment Management
Manage patient-doctor appointments easily.

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/appointments/` | View all appointments |
| POST | `/api/appointments/` | Schedule a new appointment |
| GET | `/api/appointments/:id` | View specific appointment |
| PUT | `/api/appointments/:id` | Update appointment details |
| DELETE | `/api/appointments/:id` | Cancel appointment |

---

## 🧠 Example API Response

### ✅ Server Running
```json
{
  "msg": "Hospital Management System API is running"
}
```

### 🩺 Example Patient Response
```json
{
  "_id": "672b2310f1eaa",
  "name": "John Doe",
  "age": 34,
  "gender": "Male",
  "disease": "Fever",
  "doctorId": "671a2233cde2a"
}
```

---

## 🧱 Technologies Used

- **Node.js** – Server-side runtime  
- **Express.js** – Web framework for routing  
- **JavaScript (ES6+)** – Core language  
- **Nodemon** – Development utility for live reload

---

## 💡 Future Enhancements

🚀 Integration with databases (MongoDB / MySQL)  
🔐 JWT authentication and role-based authorization  
🧾 Input validation using Joi or Express Validator  
⚠️ Centralized error handling middleware  
🖼️ File upload support (Multer for patient/doctor profile images)  
📊 Dashboard-ready data responses

---

## 🎯 How the System Works

This API simulates a **real-world hospital management workflow**:
1. **Admins** can manage doctors, departments, and appointments.
2. **Doctors** can view their appointments and assigned patients.
3. **Patients** can be registered and assigned to doctors/departments.
4. **Appointments** connect patients and doctors with scheduling data.

It’s a **backend foundation** that you can connect to any frontend — like a web admin panel, patient portal, or doctor dashboard.

---

## 👨‍💻 Author

**Iftekher**  
🌐 [Portfolio](https://iftekher-mahmud.vercel.app/)  
🐙 [GitHub](https://github.com/iftekher2108)  
💼 Passionate Full-Stack Developer & System Architect

---

⭐ *If this project inspired or helped you, please consider giving it a star on GitHub!* ⭐

