import './App.css'
import { XFollowingCard } from './XFollowingCard';


//!Compontente Reutilizable
let userNameFormated = <span>@elcarlitosortiz</span>

function App() {
  return (


    <>
      <section className='OneCard'>
        <XFollowingCard name="Carlos Ortiz Santiago" isFollowing={true} formatUsername={userNameFormated} username="elcarlitosortiz"></XFollowingCard>
      </section>

      <section className='MoreCards'>
        <XFollowingCard name="Donal Trump" isFollowing={false} formatUsername={userNameFormated} username="realDonaldTrump"></XFollowingCard>
        <XFollowingCard name="Vladimir Putin" formatUsername={userNameFormated} username="TheBigBossPutin"></XFollowingCard>
      </section>


    </>

  );

}



export default App

