import './App.css'
import { XFollowingCard } from './XFollowingCard';


//!Compontente Reutilizable
/*
El componente que hemos definido lo hemos nombrado como App, para hacerlo corrrectamente, deberiamos de asociarle un nombre afin a su objetivo, XFollowingCard.jsx e importarlo en nuestro App.jsx
*/
function App() {
  return (
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


    Me doy cuenta de que cuando hay varios componentes juntos necesitna un padding, pero si edito el XFollowingCard se aplica a todos.
    Puede haber ocasiones en lo que esto no es lo adecuado, para solucionarlo, los componentes se meten en otros contenedores y se les da a esos contenedores el estilo deseado.
    */

    <>
      <section className='OneCard'>
        <XFollowingCard name="Carlos Ortiz Santiago" username="elcarlitosortiz"></XFollowingCard>
      </section>

      <section className='MoreCards'>
        <XFollowingCard name="Donal Trump" username="realDonaldTrump"></XFollowingCard>
        <XFollowingCard name="Vladimir Putin" username="TheBigBossPutin"></XFollowingCard>
      </section>


    </>

  );

}



export default App

