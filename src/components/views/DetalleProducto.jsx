import { useEffect,useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { obtenerUnProducto } from "../helpers/queries";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const [producto,setProducto] = useState({})
  const {id} = useParams()
  useEffect(()=>{
   obtenerUnProducto(id).then(res=>{
    setProducto(res)
   })
  },[])
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
              {producto.descripcion}
              <br/>
              <br/>
              <span className="text-danger fw-semibold ">Categoria:</span> {producto.categoria}
              <br />
              <span className="text-danger fw-semibold ">Precio:</span> ${producto.precio}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
