import { Button, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { listarProductosAPI } from "../helpers/queries";

const Administrador = () => {
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
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to={"/administrador/crear"}>
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            listaProductos.map((producto)=><ItemProducto key={producto.id} producto={producto} setListaProductos={setListaProductos}></ItemProducto>)
          }
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
