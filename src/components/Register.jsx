
import React from 'react'
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form"
import { edadValidator } from './Validator';
import { Registrar } from "../helpers/ApiRegister"
import { validarTexto } from '../validators/validarTexto';
import Swal from 'sweetalert';
import "../css/Login.css"


const Register = () => {
    const { register, formState: {errors}, watch , handleSubmit } = useForm({
        defaultValues: {
            nombre: "Luis",
            direccion: "Calle Gral Paz"
        }
    });

    const onSubmit = (data) => {
        console.log(data);

    }

    const incluirTelefono = watch("incluirTelefono");

  



  return (
    <>
        <div className="form-container" >
        <h1>Crear cuenta</h1>
          <p>Crea tu cuenta para entrar al area de administracion</p>
        <p>Nombre: {watch("nombre")} </p>
        <form  onSubmit={handleSubmit(onSubmit)} >
            <div className="input-box" >
                <label className='sr-only' >Nombre</label>
                <input type="text" {...register("nombre", {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type ==="required" && <p>El campo nombre es requerido</p> } 
                {errors.nombre?.type ==="maxLength" && <p>El campo nombre debe tener menos de 10 caracteres</p> } 

            </div>
            <div className="input-box" >
                <label className='sr-only' >Dirección</label>
                <input type="text" {...register("dirección", {
                    required: true,
                })} />
            </div>
            <div className="input-box" >
                <label className='sr-only' >Email</label>
                <input type="text" {...register("email", {
                    pattern: /\S+@\S+\.\S+/
                })} />
                { errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p> }
            </div>

            <div className="input-box" >
                <label className='sr-only' >Edad</label>
                <input type="text" {...register("edad",{
                    validate: edadValidator
                })} />
                {errors.edad && <p>La edad debe estar entre 18 y 65</p> }
            </div>

            <div className="input-box" >
                <label className='sr-only' >Pais</label>
                <select {...register("país")} >
                    <option value="ar">Argentina</option>
                    <option value="ch">Chile</option>
                    <option value="ur">Uruguay</option>
                </select>
            </div>
            <div className="input-box" >
                <label className='sr-only' >¿Incluir telefono?</label>
                <input type="checkbox" {...register("incluirTelefono")} />
            </div>
            {incluirTelefono && (
            <div className="input-box" >
            <label className='sr-only' >Telefono</label>
            <input type="text" {...register("telefono")} />
            </div>

            )}

            {/* <input type="submit" value="Enviar" /> */}
            <button type='=submit' >Iniciar Sesion</button>
            <p className='error escondido' >Error al registrarse</p>

        </form>
        <p>¿Todavia no tenes una cuenta? <navlink to="/">Iniciar sesion</navlink> </p>
    </div>


    </>
  )
}

export default Register;