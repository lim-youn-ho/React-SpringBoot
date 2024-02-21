import{
    GoogleOAuthProvider,
    GoogleLogin,
    useGoogleLogin
} from "@react-oauth/google";

export default function GoogleLoginP(){
    return(
        <GoogleOAuthProvider clientId="279127607320-dm5sk2f4lna6sv2u713rbtq2o6tc1e2r.apps.googleusercontent.com">
            <GoogleLogin onSuccess={(credentialResponse) => {
                //response Token
             console.log(credentialResponse);
            }}
            onError={()=>{
                console.log("Login Failed");
            }}
            useOneTap
            />
        </GoogleOAuthProvider>
    );
};