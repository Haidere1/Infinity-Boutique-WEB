import {GoogleLogin} from 'react-google-login'

const clientId="870965457539-0t166qbqegtfdgqrv7hpj12jll0tp0qp.apps.googleusercontent.com"

const GLogin = () => {
    const onSuccess =(res)=>{
        console.log("Login Successful Current User: " ,res.profileObj)
    }
    const onFailure =(res)=>{
        console.log("Login Failed res: "    ,res)
    }
    return ( 
        <div id='SignInButton' >
            <GoogleLogin 
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />

        </div>
     );
}
 
export default GLogin;

