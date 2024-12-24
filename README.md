# ☕ RollingCoffee CRUD App  

¡Bienvenidos a **RollingCoffee**! Este es un proyecto de una aplicación CRUD para gestionar una cafetería, desarrollado con **React**. 🚀  

## 📋 Descripción  

Este proyecto fue creado para practicar las principales operaciones CRUD (**Create, Read, Update, Delete**) utilizando una API falsa proporcionada por **json-server**. Además, trabajamos con maquetado utilizando **React-Bootstrap** y configuramos la navegación entre vistas con **React Router**.  

## 🛠️ Tecnologías Utilizadas  

- **React** ⚛️  
- **json-server** 🌐  
- **React-Bootstrap** 🎨  
- **React Router** 🛣️  

## ✨ Características  

- **GET**: Listar todos los productos disponibles en la cafetería.  
- **POST**: Agregar nuevos productos al menú.  
- **PUT**: Actualizar información de productos existentes.  
- **DELETE**: Eliminar productos del menú.  
- **Interfaz amigable**: Maquetado con React-Bootstrap para un diseño responsive y moderno.  
- **Navegación**: Rutas dinámicas y navegación fluida gracias a React Router.  

## 🚀 Instalación y Uso  

1. Clona este repositorio:  
   ```bash  
   git clone https://github.com/tuusuario/rollingcoffee.git  
   cd rollingcoffee  
   ```  

2. Instala las dependencias:  
   ```bash  
   npm install  
   ```  

3. Configura y ejecuta **json-server**:  
   ```bash  
   npx json-server --watch db.json 
   ```  

4. Inicia la aplicación React:  
   ```bash  
   npm run dev  
   ```  

5. Accede a la aplicación en tu navegador:  
   [http://localhost:5173](http://localhost:5173)  

## 📂 Estructura del Proyecto  

```  
rollingcoffee/  
├── public/  
├── src/  
│   ├── components/   // Componentes reutilizables  
│       ├── pages/    // Componentes con principales  
│       ├── common/   // Componentes comúnes  
│       ├── helpers/  // Funciones para las solicitudes a json-server  
│   ├── App.jsx       // Configuración principal de rutas 
│   └── main.jsx      // Punto de entrada  
├── db.json           // Base de datos falsa para json-server  
└── README.md         // Este archivo  
```  

## 📷 Vista Previa  

(Agrega capturas de pantalla de la aplicación aquí para mostrar el diseño y funcionalidad)  


## 📝 Licencia  

Este proyecto se distribuye bajo la licencia MIT.  

---  

Desarrollado con ❤️ por Emilse Arias ☕  
