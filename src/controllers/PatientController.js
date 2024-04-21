//Aquí estará cada  endpoint con su funcionalidad
const {Patient} =require ("../models/Patients")// requiero los products de models

const PatientController={
    async getAllPatients (req, res)  {
        try {
            const patients = await Patient.find();//Find es un metodo de mongo que te permite encontrar todos los productos en este caso
            res.send(patients);
        } catch (error) {
            console.error(error);
        }
    },

    async getAllPatientsSsr(req,res){
        try{
            const patients=await Patient.find();
            res.send(
                `
                <h1>Todos los pacientes</h1>
                <ul>
                ${patients.map(patient=> {
                    return(
                        `
                        <div>
                    ${patient.nombre}
                    ${patient.apellido}
                        </div>
                    `
                )}).join('')}
            
                
                </ul>
                `
            )
        }catch (error){
            console.error(error);
        }
    },
    async getOnePatientSsr (req, res)  {
        try {
            const id = req.params._id;
            const patient = await Patient.findById(id)//Find es un metodo de mongo que te permite encontrar todos los productos en este caso
            res.send(
              `
              <!DOCTYPE html>
                    <html lang="es">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      
                      <title>Paciente</title>
                    </head>
                    <body>
                    <a href="/patients/ssr">Home</a>
              <div>
              <ul>
              <li>Nombre: ${patient.nombre}</li>
              <li>Apellido: ${patient.apellido}</li>
              <li>Edad: ${patient.edad}</li>
              <li>Genero: ${patient.genero}</li>
              <li>Dirección: ${patient.direccion}</li>
              <li>Historial Medico: ${patient.historialMedico}</li>
              </ul>
              </div>
              
              `
            );
        } catch (error) {
            console.error(error);
        }
    },


    async createNewPatient (req,res){
        try {
            const patients= await Patient.create({...req.body})
        res.status(201).json(patients)
        }catch(error){console.log(error)}
    },

    async getOnePatient (req,res){
        try{
            const id=req.params._id
            const patient= await Patient.findById(id)
            res.send(patient)
        }catch(error){console.log(error)}
    },

    async deletePatient (req, res) {
        try {
          const id = req.params._id
          const deletedPatient = await Patient.findByIdAndDelete(id)
          if (!deletedPatient) {
            return res.status(404).json({message: "Patient with that id not found"})
          }  
          res.json({message: "Patient deleted successfully", deletedPatient})
          
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal server error" });
        }
    },
}

module.exports= PatientController;

