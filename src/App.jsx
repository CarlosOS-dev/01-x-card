import './App.css'

function App(){
  return(
    /*
    Estilos en linea
    <article style="display:flex"></article> Esto es erroneo
    Para poder hacerlo, el estilo hay que introducirlo como un objeto. Y las propiedades nombrarlas como camelCase, si no no funciona.

    <article style={{display:"flex"}}></article> Esta forma no es la adecuada, ni la mas comoda. A veces si que es util.

    Para hacerlo correctamente, nos creamos App.css donde le vamos a dar estilo a nuestro componente.
    Tambien podemos usar  css modules, TailWind

    Para identificar a los elementos html que queremos estilizar, se utiliza la propiedad className
    -id: no es recomendable porque nuestro objetivo es que nuestro componente sea reutilizable. El id no se puede repetir.
    -class: No es valido, ya que cuando se traduce jsx lo hace a javascript y la palabra class esta reservada.
    -className: Es valido. Puede utilizar la nomenclatura
    */
    
    <article className='x-followCard'>
      <header className='x-followCard-header'>
        <img className='x-followCard-avatar' src="https://pbs.twimg.com/profile_images/2021500072677212166/5NGWhKny_400x400.jpg" alt="Mi avatar" />
        <div className='x-followCard-info'>
          <strong>Carlos Ortiz Santiago</strong>
          <span className='x-followCard-infoUserName'>@elcarlitosortiz</span>
        </div>
      </header>
      <aside>
        <button className='x-followCard-button'>Seguir</button>
      </aside>
    </article>
  );
}



export default App

