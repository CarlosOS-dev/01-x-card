import './App.css'
import { XFollowingCard } from './XFollowingCard';


//!Compontente Reutilizable
/*
El componente que hemos definido lo hemos nombrado como App, para hacerlo corrrectamente, deberiamos de asociarle un nombre afin a su objetivo, XFollowingCard.jsx e importarlo en nuestro App.jsx
*/
function App() {
  return (


    <>
      <section className='OneCard'>
        <XFollowingCard name="Carlos Ortiz Santiago" isFollowing={true} username="elcarlitosortiz"></XFollowingCard>
      </section>

      <section className='MoreCards'>
        <XFollowingCard name="Donal Trump" isFollowing={false} username="realDonaldTrump"></XFollowingCard>
        <XFollowingCard name="Vladimir Putin" username="TheBigBossPutin"></XFollowingCard>
      </section>


    </>

  );

}



export default App

