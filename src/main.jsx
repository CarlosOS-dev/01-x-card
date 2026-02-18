import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


//! Creamos el raiz de React
let root = createRoot(document.getElementById('root'))

//! Creacion de Componentes
//La creación de componentes la hacemos en el fichero /src/App.jsx tiene la extension .jsx para decirle a VITE que contiene jsx y que lo tiene que traducir a javascript


//! Renderizar los componentes

root.render(
  <>
  <App></App>
  
  </>
);

//!Damos estilo a nuestra web en el fichero /src/index.css
//!Damos estilo a nuestros componentes en el fichero /src/App.css