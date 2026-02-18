
import './App.css'

//Caracteristicas de las props
//1. Son un objeto
//2. Son inmutables
//Ejemplo: username ="@"+username;
//Si recibo un vector de tamaño 4 y le añado un elemento con push, estaria mal.

/*Props de tipo children
    <XFollowingCard>{children}</XFollowingCard> */

export function XFollowingCard({username,children,isFollowing,formatUsername}) {


    //Javascript
    let url="https://unavatar.io/x/"+username;

    console.log(isFollowing);
    return (
        
        <article className='x-followCard'>
            {/*JSX*/}
            <header className='x-followCard-header'>
                <img className='x-followCard-avatar' src={url} alt="Mi avatar" />
                <div className='x-followCard-info'>
                    <strong>{children}</strong>
                    <span className='x-followCard-infoUserName'>{formatUsername}</span>
                </div>
            </header>
            <aside>
                <button className='x-followCard-button'>Seguir</button>
            </aside>
        </article>
    );

}