
import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Registrar } from "../helpers/ApiSignUp"
import { validarTexto } from '../validators/validarTexto';
import Swal from 'sweetalert2';
const SignUp = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();



  return (
    <>
      <div>
      </div>
    </>
  )
}

export default SignUp