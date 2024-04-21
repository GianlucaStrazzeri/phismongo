//mainRoutes se encarga de gestionar el enrutamiento de forma visual, la parte funcional se encontrará en controllers

const express = require('express') //requiero express
const router = express.Router() //inicializo enrutador de express
const PatientController = require('../controllers/PatientController.js') //requiero PatientController para hacer funcionar los controladores

 
router.get('/patients', PatientController.getAllPatients )//Devuelve  todos los pacientes
router.get('/patients/ssr', PatientController.getAllPatientsSsr )//Devuelve  todos los pacientes
router.get("/patient/:_id",PatientController.getOnePatient)//Devuelve un paciente por su id
router.get("/patient/ssr/:_id",PatientController.getOnePatientSsr)//Devuelve un paciente por su id
router.get("/patient/create/form",PatientController.createNewPatientForm)//Formulario para crear nuevos Pacientes
router.post("/patient/create", PatientController.createNewPatient)//Crea un nuevo paciente
router.post("/patients/:_id",PatientController.deletePatient)//Elimina un producto desde su pagina, los formularios en html, solo tienen dos métodos:get y post por eso no se utilza router.delete



module.exports = {router}; //exporto el enrutador --->[exportar y importar de la misma forma!!]