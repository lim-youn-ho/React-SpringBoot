import{
    GoogleOAuthProvider,
    GoogleLogin,
    useGoogleLogin
} from "@react-oauth/google";

export default function GoogleLoginP(){
    return(
        <GoogleOAuthProvider clientId="구글에서 발급 받은 클라이언트 아이디 값">
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