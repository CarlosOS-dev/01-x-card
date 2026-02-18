import './App.css'
import { XFollowingCard } from './XFollowingCard';


//!Compontente Reutilizable
/*
Defino mi funcion fuera del componente
*/
function formateo(username){
        return "@" + username;
    }
function App() {
  return (


    <>
      <section className='OneCard'>
        <XFollowingCard name="Carlos Ortiz Santiago" isFollowing={true} formatUsername={formateo} username="elcarlitosortiz"></XFollowingCard>
      </section>

      <section className='MoreCards'>
        <XFollowingCard name="Donal Trump" isFollowing={false} formatUsername={formateo} username="realDonaldTrump"></XFollowingCard>
        <XFollowingCard name="Vladimir Putin" formatUsername={formateo} username="TheBigBossPutin"></XFollowingCard>
      </section>


    </>

  );

}



export default App

