

import {  NavLink } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { authRegister } from "../helpers/ApiRegister"
import { useState } from "react";
import "../css/Register.css"


const Register = () => {
    // const [nombre, setNombre] = useState ("")
    // const [contraseña, setContraseña] = useState ("")
    // const [correo, setCorreo] = useState ("")
    // const [errors, setErrors] = useState (false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (nombre === "" || contraseña === "" || correo === "" ) {
    //     setErrors(true)
    //     return
    // }
    // setErrors(false)

    // setUser([nombre])

    const usuario={
        nombre: values.nombre,
        correo: values.correo, 
        rol:"USER_ROLE",
        password: values.password,
    }
    console.log(usuario);
    const resp= await authRegister(usuario);
    console.log(resp);
  };

  const [values, setValues] = useState({
    nombre: "",
    correo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <>
    <div className='bg-gold'>
      <div className='container container-register'>
        <div className='row px-2' >
        <div className='card-register'>
        <Card border="dark">
      <Card.Header className="bg-primary text-light card-titulo">
      <h1>Crear cuenta</h1>
          <p>Crea tu cuenta para entrar al area de administracion</p>
      </Card.Header>
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit}>

          <Row className="mb-3">

            <Form.Group
              as={Col}
              md="6"
              controlId="validationNombre"
              className="mb-3"
            >
              <Form.Label className='sr-only'>Nombre y Apellido</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Juan Perez"
                value={values.nombre}
                //onChange={e => setNombre (e.target.value)}
                name="nombre"
                onChange={handleChange}
              />

            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationContraseña"
              className="mb-3"
            >
              <Form.Label className='sr-only'  >CONTRASEÑA</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="contraseña"
                value={values.password}
                //onChange={e => setContraseña (e.target.value)}
                name="password"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationEmail"
              className="mb-"
            >
              <Form.Label className='sr-only'>Correo</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="juanperez@mail.com"
                value={values.correo}
                //onChange={e => setCorreo (e.target.value)}
                name="correo"
                onChange={handleChange}
              />
            </Form.Group>

          </Row>

          <Button type="submit">Iniciar Sesion</Button>
          <p className='error escondido' >Error al registrarse</p>

        </Form>

        <p>¿Todavia no tenes una cuenta? <NavLink to="/Login">Iniciar sesion</NavLink> </p>
      </Card.Body>
    </Card>
        </div>
        </div>
        {/* {errors && <p>Todos los campos son obligatorios</p> } */}
      </div>
    </div>
    </>

  )
}

export default Register;



// import '../css/Register.css'
// import { NavLink } from "react-router-dom";
// import { Form, Button, Row, Col, Card } from "react-bootstrap";
// import { useForm } from "react-hook-form";
// //import Swal from "sweetalert";
// import { authRegister } from "../helpers/ApiRegister"


// const Register = () => {
    
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }, reset
//   } = useForm();

// //   const onSubmit = (data) => {
// //     console.log(data);
// //     Swal.fire(
// //       "Datos enviados",
// //       "Los datos fueron enviados correctamente",
// //       "success"
// //     );
// //     reset();
// //   };



//   return (
//     <>
//     <div className='bg-gold'>
//       <div className='container container-register'>
//         <div className='row px-2' >
//         <div className='card-register'>
//         <Card border="dark">
//       <Card.Header className="bg-primary text-light card-titulo">
//       <h1>Crear cuenta</h1>
//           <p>Crea tu cuenta para entrar al area de administracion</p>
//       </Card.Header>
//       <Card.Body>
//         <Form  onSubmit={handleSubmit(authRegister)}>
//           <Row className="mb-3">

//             <Form.Group
//               as={Col}
//               md="6"
//               controlId="validationNombre"
//               className="mb-3"
//             >
//               <Form.Label className='sr-only'>Nombre y Apellido</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Juan Perez"
//                 {...register("nombre", {
//                   required: "El nombre es obligatorio",
//                   minLength: {
//                     value: 2,
//                     message: "La cantidad minima de caracteres es 2",
//                   },
//                   maxLength: {
//                     value: 50,
//                     message: "La cantidad maxima de caracteres es 50",
//                   },
//                 })}
//               />
//               <Form.Text className="text-danger">
//                 {errors.nombre?.message}
//               </Form.Text>
//             </Form.Group>
            
//             {/* <Form.Group
//               as={Col}
//               md="6"
//               controlId="validationApellido"
//               className="mb-3"
//             >
//               <Form.Label className='sr-only'  >Apellido</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Perez"
//                 {...register("apellido", {
//                   required: "El apellido es obligatorio",
//                   minLength: {
//                     value: 2,
//                     message: "La cantidad minima de caracteres es 2",
//                   },
//                   maxLength: {
//                     value: 50,
//                     message: "La cantidad maxima de caracteres es 50",
//                   },
//                 })}
//               />
//               <Form.Text className="text-danger">
//                 {errors.apellido?.message}
//               </Form.Text>
//             </Form.Group> */}

//             <Form.Group
//               as={Col}
//               md="6"
//               controlId="validationDNI"
//               className="mb-3"
//             >
//               <Form.Label className='sr-only'>Password</Form.Label>
//               <Form.Control
//                 required
//                 type="number"
//                 placeholder="Contraseña"
//                 {...register("password", {
//                   required: "La contraseña es obligatorio",
//                   pattern: {
//                     value: /^\d{7,8}(?:[-\s]\d{4})?$/,
//                     message: "Debe ingresar una contraseña valido de 7 a 8 caracteres",
//                   },
//                 })}
//               />
//               <Form.Text className="text-danger">
//                 {errors.contraseña?.message}
//               </Form.Text>
//             </Form.Group>

//             <Form.Group
//               as={Col}
//               md="12"
//               controlId="validationEmail"
//               className="mb-3"
//             >
//               <Form.Label className='sr-only'>Email</Form.Label>
//               <Form.Control
//                 required
//                 type="email"
//                 placeholder="juanperez@mail.com"
//                 {...register("email", {
//                   required: "El email es obligatorio",
//                   pattern: {
//                     value:
//                       /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
//                     message: "Debe ingresar un email valido",
//                   },
//                 })}
//               />
//               <Form.Text className="text-danger">
//                 {errors.email?.message}
//               </Form.Text>
//             </Form.Group>

//           </Row>
//           <Button type="submit">Iniciar Sesion</Button>
//           <p className='error escondido' >Error al registrarse</p>
//         </Form>

//         <p>¿Todavia no tenes una cuenta? <NavLink to="/Login">Iniciar sesion</NavLink> </p>
//       </Card.Body>
//     </Card>
//         </div>
//         </div>
//       </div>
//     </div>
//     </>

//   )
// }

// export default Register;
