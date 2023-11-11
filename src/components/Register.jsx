
import {  NavLink } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
//import { useForm } from "react-hook-form";
import "../css/Register.css"
import { authRegister } from "../helpers/ApiRegister"
import { useState } from "react";


const App = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className='bg-dark'>
      <div className='container container-register'>
        <div className='row px-2' >
        <div className='card-register'>
        <Card border="primary">
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
              <Form.Label className='sr-only'  >Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Juan"
                value={values.nombre}
                name="nombre"
                onChange={handleChange}
                
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationApellido"
              className="mb-3"
            >
     
              <Form.Label className='sr-only'  >CONTRASEÑA</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="contraseña"
                value={values.password}
                name="password"
                onChange={handleChange}
               
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationEmail"
              className="mb-3"
            >
              <Form.Label className='sr-only' >Correo</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="juanperez@mail.com"
                value={values.correo}
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
      </div>
    </div>
    </>

  )
}

export default App;



