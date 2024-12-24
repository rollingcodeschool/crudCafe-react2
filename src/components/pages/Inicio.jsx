import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { listarProductosAPI } from "../helpers/queries";

const Inicio = () => {
   const [listaProductos, setListaProductos] = useState([]);
  
    useEffect(() => {
      consultarAPI();
    }, []);
  
    const consultarAPI = async () => {
      const respuesta = await listarProductosAPI();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setListaProductos(datos);
      } else {
        alert("Ocurrio un error, intenta esta operacion en unos minutos");
      }
    };

    return (
        <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />

        <Row>
          {
            listaProductos.map((producto)=><CardProducto key={producto.id} producto={producto}></CardProducto>)
          }
        </Row>
      </Container>
    </section>
    );
};

export default Inicio;