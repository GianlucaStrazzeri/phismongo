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

    async getAllPatientsSSr(req,res){
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
    }
}

module.exports= PatientController;

