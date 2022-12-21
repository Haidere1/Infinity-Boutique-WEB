import {useContext} from 'react';
import {Appcontext} from './login.js'
function User() {
    const {username}=useContext(Appcontext)
    return ( 
        <div>
            User:{username}
        </div>
     );
}

export default User;
