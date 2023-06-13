
import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../helpers/queries";
import {useForm} from 'react-hook-form'
import Swal from "sweetalert2";

const Login = ({setUsuarioLogueado}) => {

  const {register,handleSubmit, formState:{errors},reset} = useForm()

  
  const onSubmit = (usuario) =>{
    login(usuario).then((respuesta)=>{
      console.log(respuesta)
      if(respuesta){
        sessionStorage.setItem("usuario",JSON.stringify(respuesta))
        setUsuarioLogueado(respuesta)
      }else{
        Swal.fire(
          'Ocurrio un error!',
          'El email o usuario es incorrecto',
          'error'
        )
      }
    })
  }

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
               {...register("email",{
                required:"El email es un dato obligatorio",
                pattern:{
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "El email debe tener un formato valido (mail@dominio.com)"
                }
               })}
              />
             <Form.Text className="text-danger">
              {errors.email?.message}
             </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
               {...register("password",{
                required:"El password es un dato obligatorio",
                pattern:{
                  value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                  message:"El password debe contener entre 8 y 16 caracteres y debe incluir numeros, caracteres en mayuscula, minuscula y al menos un caracter especial"
                }
               }
               )}
              />
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;


