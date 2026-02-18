
import './App.css'

export function XFollowingCard({username,name,isFollowing}) {

    //!Parametrizar el componente
    //Si nos damos cuenta el parametro isFollowing no se ha utilizado.
    //Si un parametro no se inicializa o no se pasa, tiene un valor undefined, no false.

    //Javascript
    let url="https://unavatar.io/x/"+username;
    console.log(isFollowing);
    return (
        
        <article className='x-followCard'>
            {/*JSX*/}
            <header className='x-followCard-header'>
                <img className='x-followCard-avatar' src={url} alt="Mi avatar" />
                <div className='x-followCard-info'>
                    <strong>{name}</strong>
                    <span className='x-followCard-infoUserName'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className='x-followCard-button'>Seguir</button>
            </aside>
        </article>
    );

}