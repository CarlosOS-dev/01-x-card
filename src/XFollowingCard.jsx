
import './App.css'

export function XFollowingCard({username,name,isFollowing,formatUsername}) {

    //!Parametrizar el componente
    /*
    Vamos a crar una funcion para que concatene el username con @
    */

    

    //Javascript
    let url="https://unavatar.io/x/"+username;

    //!Parametrizar el componente
    /*
    Ahora mi componente no esta recibiendo uan funcion sino un elemento.*/ 
    console.log(isFollowing);
    return (
        
        <article className='x-followCard'>
            {/*JSX*/}
            <header className='x-followCard-header'>
                <img className='x-followCard-avatar' src={url} alt="Mi avatar" />
                <div className='x-followCard-info'>
                    <strong>{name}</strong>
                    <span className='x-followCard-infoUserName'>{formatUsername}</span>
                </div>
            </header>
            <aside>
                <button className='x-followCard-button'>Seguir</button>
            </aside>
        </article>
    );

}