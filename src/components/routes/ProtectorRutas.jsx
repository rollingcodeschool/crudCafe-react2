import { Navigate } from "react-router";


const ProtectorRutas = ({children}) => {
   //agregar la logica que quiero que suceda para que puedan ver las rutas del admin
   const userAdmin = JSON.parse(sessionStorage.getItem('userKey')) || null;
   //preguntar si no me logue, si no soy el usuario admin
   if(!userAdmin){
    return <Navigate to={'/login'}></Navigate>
   }else{
    // si soy el administrador
    return children;
   }
};

export default ProtectorRutas;