
import '../css/Registro.css' 

import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert";

const FormularioRegistro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire(
      "Datos enviados",
      "Los datos fueron enviados correctamente",
      "success"
    );
    reset();
  };

  return (
    <>
    <div className='bg-dark'>
      <div className='container container-register'>
        <div className='row px-2' >
        <div className='card-register'>
        <Card border="primary">
      <Card.Header className="bg-primary text-light card-titulo">
        Formulario Simple
      </Card.Header>
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationNombre"
              className="mb-3"
            >
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Juan"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres es 2",
                  },
                  maxLength: {
                    value: 50,
                    message: "La cantidad maxima de caracteres es 50",
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
              controlId="validationApellido"
              className="mb-3"
            >
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Perez"
                {...register("apellido", {
                  required: "El apellido es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres es 2",
                  },
                  maxLength: {
                    value: 50,
                    message: "La cantidad maxima de caracteres es 50",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.apellido?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationDNI"
              className="mb-3"
            >
              <Form.Label>DNI</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="9999999"
                {...register("dni", {
                  required: "El dni es obligatorio",
                  pattern: {
                    value: /^\d{7,8}(?:[-\s]\d{4})?$/,
                    message: "Debe ingresar un dni valido de 7 a 8 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.dni?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationEmail"
              className="mb-3"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="juanperez@mail.com"
                {...register("email", {
                  required: "El dni es obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "Debe ingresar un email valido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
          </Row>
          <Button type="submit">Enviar</Button>
        </Form>
      </Card.Body>
    </Card>
        </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default FormularioRegistro;