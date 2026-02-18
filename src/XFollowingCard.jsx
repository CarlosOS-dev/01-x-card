
import './App.css'

export function XFollowingCard({username,name,isFollowing}) {

    //!Parametrizar el componente
    //Los parametros se pasan como un objeto

    //Javascript
    let url="https://unavatar.io/x/"+username;
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