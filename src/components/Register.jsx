import { NavLink } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { authRegister } from "../helpers/ApiRegister";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/Register.css";

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const usuario = {
      nombre: data.nombre,
      correo: data.correo,
      rol: "USER_ROLE",
      password: data.password,
    };

    console.log(usuario);

    const resp = await authRegister(usuario);
    console.log(resp);

    // Limpiar los campos del formulario
    reset();
  };

  return (
    <>
      <div className='bg-gold'>
        <div className='container container-register'>
          <h3 className="titulo">Registrarse</h3>
          <div className='row px-2' >
            <div className='card-register'>
              <Card border="dark">
                <Card.Header className="bg-primary text-light card-titulo">
                  <p>Crea tu cuenta para entrar al área de administración</p>
                </Card.Header>
                <Card.Body>
                  <Form className="formRegister" noValidate onSubmit={handleSubmit(onSubmit)}>
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
                          {...register("nombre", {
                            required: "El nombre es obligatorio",
                            minLength: {
                              value: 2,
                              message: "La cantidad mínima de caracteres es 2",
                            },
                            maxLength: {
                              value: 50,
                              message: "La cantidad máxima de caracteres es 50",
                            },
                          })}
                        />
                        <Form.Text className="text-danger">
                          {errors.nombre?.message}
                        </Form.Text>
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
                          {...register("password", {
                            required: "La contraseña es obligatoria",
                            pattern: {
                              value: /^\d{7,8}(?:[-\s]\d{4})?$/,
                              message: "Debe ingresar una contraseña válida de 7 a 8 caracteres",
                            },
                          })}
                        />
                        <Form.Text className="text-danger">
                          {errors.password?.message}
                        </Form.Text>
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
                          {...register("correo", {
                            required: "El correo es obligatorio",
                            pattern: {
                              value:
                                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                              message: "Debe ingresar un correo válido",
                            },
                          })}
                        />
                        <Form.Text className="text-danger">
                          {errors.correo?.message}
                        </Form.Text>
                      </Form.Group>

                    </Row>

                    <Button type="submit" className="w-100">Crear cuenta</Button>
                    <p className='error escondido' >Error al registrarse</p>

                  </Form>

                  <p>¿Todavía no tienes una cuenta? <NavLink to="/Login">Iniciar sesión</NavLink> </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
