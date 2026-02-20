import './App.css'
import { useState } from 'react'
import { XFollowingCard } from './XFollowingCard';


//!Compontente Reutilizable


function App() {

let userNameFormated = <span>@elcarlitosortiz</span>
 
  
  return (

    <>
      <section className='OneCard'>
        <XFollowingCard    username="elcarlitosortiz" initialIsFollowing={true}>Carlos Ortiz Santiago</XFollowingCard>
      </section>

      <section className='MoreCards'>
        <XFollowingCard   username="realDonaldTrump" initialIsFollowing={false}>Donal Trump</XFollowingCard>
        <XFollowingCard   username="TheBigBossPutin" initialIsFollowing={false}>Vladimir Putin</XFollowingCard>
      </section>



    </>

  );

}



export default App

