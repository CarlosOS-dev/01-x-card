import './App.css'
import { useState } from 'react'
import { XFollowingCard } from './XFollowingCard';


//!Compontente Reutilizable
let userNameFormated = <span>@elcarlitosortiz</span>

function App() {


  let [name,setName] = useState("Profesor") //Creo un estado para que la variable name sea "Profesor" o "Alumno"

  let [isFollowing,setIsFollowing] = useState(false);

  function changeName() {
    setName("Alumno")
    setIsFollowing(true)
  }
  return (

    <>
      <section className='OneCard'>
        <XFollowingCard  isFollowing={isFollowing} formatUsername={userNameFormated} username="elcarlitosortiz">{name}</XFollowingCard>
      </section>

      <section className='MoreCards'>
        <XFollowingCard isFollowing={isFollowing} formatUsername={userNameFormated} username="realDonaldTrump">Donal Trump</XFollowingCard>
        <XFollowingCard  formatUsername={userNameFormated} username="TheBigBossPutin">Vladimir Putin</XFollowingCard>
      </section>

      <button onClick={changeName}>{name}</button>


    </>

  );

}



export default App

