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
                
                <div style="
                display:flex;
                flex-direction:column;
                align-items:center;
                ">
                <h1>HomePage</h1>
                <a href="/login"><button>Login</button></a>
                <a href="/patient/create/form"><button>Crea nuevo paciente</button></a>
                <h2>Todos los pacientes </h2>
                <input type="text" placeholder="Buscar Paciente"></input>
                </div>

                <ol>
                ${patients.map(patient=> {
                    return(
                        `
                        <div 
                        style=
                        "
                        display:flex;
                        justify-content:center;
                        gap:20px;
                        padding: 2px 2px 2px 2px;
                        margin: 2px 2px 2px 2px;
                        ">
                    
                    <a href="/patient/ssr/${patient._id}">${patient.nombre} ${patient.apellido}</a>
                        </div>
                    `
                )}).join('')}
            
                
                </ol>
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
                    
              <div style="
              display:flex; 
              flex-direction:column; 
              align-items:center;
              border: 1px solid black;
              ">
              <a href="/patients/ssr">Home</a>
              <ul>
              <li>Nombre: ${patient.nombre}</li>
              <li>Apellido: ${patient.apellido}</li>
              <li>Edad: ${patient.edad}</li>
              <li>Genero: ${patient.genero}</li>
              <li>Dirección: ${patient.direccion}</li>
              <li>Historial Medico: ${patient.historialMedico}</li>
              <li> ID: ${patient._id}</li>
              </ul>
              
              <form action="/patients/${id}" method="POST">
                <button type="submit">Borrar</button>
              </form>
              </div>
              `
            );
        } catch (error) {
            console.error(error);
        }
    },

    async createNewPatientForm(req,res){
        try{
            res.send(
                `

                <a href="/patients/ssr">Home</a>

            <h1 style="text-align:center">Crea un paciente</h1>

            <div style=
            "
            display:flex;
            justify-content:center;
            "
            >

                <form action="/patient/create" method="POST">
                <div style=
                "
                display:flex;
                align-items:center; 
                gap:1px; 
                flex-direction: column;
                "
                >


                <label for="name">Nombre</label>
                <input type="text"placeholder="Nombre" name="nombre"></input>
                </div>
                <div style=
                "
                display:flex;
                align-items:center; 
                gap:1px; 
                flex-direction: column;
                "
                >


                <label for="name">Apellido</label>
                <input type="text"placeholder="Apellido" name="apellido"></input>
                </div>
                <div style=
                "
                display:flex;
                align-items:center; 
                gap:1px; 
                flex-direction: column;
                "
                >


                <label for="name">Movil</label>
                <input type="number"placeholder="Numero de movil" name="telefono"></input>
                </div>
                <div style=
                "
                display:flex;
                align-items:center; 
                gap:1px; 
                flex-direction: column;
                "
                >


                <label for="name">Edad</label>
                <input type="number"placeholder="Edad" name="edad"></input>
                </div>
                <div style=
                "
                display:flex;
                align-items:center; 
                gap:1px; 
                flex-direction: column;
                "
                >


                <label for="name">Sexo</label>
                <input type="text"placeholder="Genero" name="genero"></input>
                </div>


                <div style=
                "
                display:flex;
                align-items:center; 
                gap:1px; 
                flex-direction: column;
                "
                >
                <label for="name">Dirección</label>
                <input type="text"placeholder="Dirección" name="direccion"></input>
                </div>


                <div style=
                "
                display:flex;
                align-items:center; 
                gap:1px; 
                flex-direction: column;
                "
                >
                <label for="name">Correo Electronico</label>
                <input type="text"placeholder="Correo Electronico" name="CorreoElectronico"></input>
                </div>


                <div style=
                "
                display:flex;
                align-items:center; 
                gap:1px; 
                flex-direction: column;
                "
                >
                <label for="name">Fecha</label>
                <input type="date"placeholder="Fecha" name=fecha"></input>
                </div>


                <div style=
                "
                display:flex;
                align-items:center; 
                gap:1px; 
                flex-direction: column;
                "
                >
                <label for="name">Historial</label>
                <textarea type="text"placeholder="Historial Clinico" name="historialMedico"></textarea>
                </div>
                <div style="display:flex; justify-content:center;">
                <button type="submit" >Guardar Paciente</button>
                </div>
                </form>
                </div>
                `
        )

        }catch(error){console.log(error)}
    },

    async createNewPatient (req,res){
        try {
            const patients= await Patient.create({...req.body})
            res.send(`

            <p>${patients} creado con exito! </p>
            <a href="/patients/ssr" >Vuelve a la home</a>
            <a href="/patient/create/form" >Crea otro paciente</a>
            `)
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

    async getLogin (req,res){
        try{
            res.send(
                `
                <div style="display:flex; flex-direction:column; align-items:center;">
                <a href="/patients/ssr">Home</a>
                <h1>Login</h1>
                <p> Have you got an account? </p>
                <form>
                <input type="text" name="username" placeholder="username"></input>
                <input type="text" name="email" placeholder="email"></input>
                </form>
                <p> Do you need to Sign up? </p>
                <button>Register with Google</button>
                <button>Register with Email </button>
                </div>

                `
            )
        }catch(error){console.log(error)}
    },

    async deletePatient (req, res) {
        try {
          const id = req.params._id
          const deletedPatient = await Patient.findByIdAndDelete(id)
          if (!deletedPatient) {
            return res.status(404).json({message: "Patient with that id not found"})
          }  
         // res.json({message: "Patient deleted successfully", deletedPatient})
          res.send(
            `
            <p>  Patient deleted successfully, ${deletedPatient}</p>
          <a href="/patients/ssr">Home</a>
          `)
          
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal server error" });
        }
    },
}

module.exports= PatientController;

