
import './App.css'

/*
 El estado es similar a cuando entramos en clase, puede estar la luz encendida o apagada en funcion de como este la luz la clase tiene una apariencia u otra. Este concepto de estado es el mismo que vamos a usar en React con lso componentes y nos ayudan a que tengan vida.


 Vamos a hacer que si pongo el raton encima del boton cambie el color de fondo y el color del texto.
*/

export function XFollowingCard({username,children,isFollowing,formatUsername}) {


    //Javascript
    let url="https://unavatar.io/x/"+username;

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
                    <span className='x-followCard-infoUserName'>{formatUsername}</span>
                </div>
            </header>
            <aside>
                <button className={claseBoton}>{textoBoton}</button>
            </aside>
        </article>
    );

}