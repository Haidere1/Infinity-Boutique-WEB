import {GoogleLogout} from 'react-google-login'
const clientId="870965457539-0t166qbqegtfdgqrv7hpj12jll0tp0qp.apps.googleusercontent.com";
function Glogout(){
    const onSuccess=()=>{
        console.log("Logged Out")
    }
    return(
        <div id='signOutButton'>
            <GoogleLogout
            clientId={clientId}
            buttonText='LogoutButton'
            onLogoutSuccess={onSuccess}
            />
        </div>
    )

}
export default Glogout;