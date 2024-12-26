import { Button } from "react-bootstrap";
import { borrarProductoAPI, listarProductosAPI } from "../../helpers/queries";

const ItemProducto = ({producto, setListaProductos}) => {

  const borrarProducto = async()=>{
    const respuesta = await borrarProductoAPI(producto.id)
    if(respuesta.status === 200){
      const respuestaListaProductos = await listarProductosAPI();
      if(respuestaListaProductos.status === 200){
        //actualizar la tabla
        const datos = await respuestaListaProductos.json()
        setListaProductos(datos);
      }
      alert('El producto fue eliminado correctamente.')
    }else{
      alert('Ocurrio un error, intente esta operación en unos minutos.')
    }
  }

  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
