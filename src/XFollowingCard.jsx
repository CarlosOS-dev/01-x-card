
import './App.css'
import { useState } from 'react'

/*

*/

export function XFollowingCard({username,children,initialIsFollowing}) {


    //Javascript
    let url="https://unavatar.io/x/"+username;
    

    let[isFollowing, setIsFollowing] = useState(initialIsFollowing);
    function hacerClick(){
        setIsFollowing(!isFollowing);
    }

    let textoBoton = isFollowing ? 'Siguiendo' : 'Seguir';

    let claseBoton = isFollowing ? 'x-followCard-button is-following' : 'x-followCard-button';

    console.log(isFollowing);
    return (
        
        <article className='x-followCard'>
            {/*JSX*/}
            <header className='x-followCard-header'>
                <img className='x-followCard-avatar' src={url} alt="Mi avatar" />
                <div className='x-followCard-info'>
                    <strong>{children}</strong>
                    <span className='x-followCard-infoUserName'></span>
                </div>
            </header>
            <aside>
                <button className={claseBoton} onClick={hacerClick}>{textoBoton}</button>
            </aside>
        </article>
    );

}