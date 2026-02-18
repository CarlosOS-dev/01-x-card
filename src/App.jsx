import './App.css'
import { XFollowingCard } from './XFollowingCard';


//!Compontente Reutilizable
let userNameFormated = <span>@elcarlitosortiz</span>

function App() {
  return (


    <>
      <section className='OneCard'>
        <XFollowingCard  isFollowing={true} formatUsername={userNameFormated} username="elcarlitosortiz">Carlos Ortiz Santiago</XFollowingCard>
      </section>

      <section className='MoreCards'>
        <XFollowingCard isFollowing={false} formatUsername={userNameFormated} username="realDonaldTrump">Donal Trump</XFollowingCard>
        <XFollowingCard  formatUsername={userNameFormated} username="TheBigBossPutin">Vladimir Putin</XFollowingCard>
      </section>


    </>

  );

}



export default App

