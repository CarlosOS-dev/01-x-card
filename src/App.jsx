import './App.css'
import { useState } from 'react'
import { XFollowingCard } from './XFollowingCard';


//!Compontente Reutilizable


function App() {

  //!Array de elementos
  let usuarios = [
    {userName: "elcarlitosortiz", name: "Carlos Ortiz Santiago",isFollow:true},
    {userName: "realDonaldTrump", name: "Donal Trump",isFollow:false},
    {userName: "TheBigBossPutin", name: "Vladimir Putin",isFollow:false}
  ]

  //COMO SE USA EL MAP
  // let numeros = [1,2,6,3,8]

  // let numerosDuplicados =numeros.map(
  //   function(numero){
  //     return numero * 2;
  //   }
  // )
  //console.log(numerosDuplicados);
 
  
  return (

    <>
      
      {/*Esto puede ser mas eficiente*/}
      
      {/* <section className='MoreCards'>
        {usuarios.map(function(usuario){
          return <XFollowingCard   username={usuario.username} initialIsFollowing={usuario.isFollow}>{usuario.name}</XFollowingCard>
        })}
      </section> */}

       <section className='MoreCards'>
        {usuarios.map(({userName,name,isFollow}) => {
          return <XFollowingCard username={userName} initialIsFollowing={isFollow}>{name}</XFollowingCard>
        })}
      </section>



    </>

  );

}



export default App

