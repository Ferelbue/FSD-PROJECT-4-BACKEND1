
import express from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { deleteUser, getUserByEmail, getUserProfile, getUsers, updateUserProfile, updateUserRole } from "./controllers/userController";
import { createAppointment, getAllAppointment, getAppointment, updateAppointment } from "./controllers/appointmentController";
import { createService, deleteService, getServices, updateService } from "./controllers/serviceController";
import { login, register } from "./controllers/authController";

export const app = express();

app.use(express.json());

app.get('/healthy', (req,res) => {
    res.status(200).json(
    {
        success: true,
        message: "Server is healthy"
    })
})

// AUTH ROUTES
app.post('/api/auth/register', register) // Done
app.post('/api/auth/login', login)


// USERS RUTES
app.get('/api/users', getUsers) // Inprogress me falta el id 
app.get('/api/users/profile/:id', getUserProfile) 
app.get('/api/users/:email', getUserByEmail)
app.put('/api/users/profile', updateUserProfile)
app.put('/api/users/:id/role ', updateUserRole)
app.delete('/api/users/:id:', deleteUser)

// APPOINTMENTS RUTES
app.get('/api/appointments/:id', getAppointment) // Inprogress me falta el id 
app.get('/api/appointments', getAllAppointment) // Done
app.post('/api/appointments', createAppointment) // Done
app.put('/api/appointments/:id', updateAppointment) // Done

// SERVICES RUTES
app.get('/api/services', getServices) //Done
app.post('/api/services', createService) //Done
app.put('/api/services/:id', updateService) //Done
app.delete('/api/services/:id', deleteService) //Done
