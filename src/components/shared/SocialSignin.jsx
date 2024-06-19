
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { BsGithub, BsGoogle } from "react-icons/bs";
const SocialSignin = () => {
 
  const session = useSession()

  const searchParams = useSearchParams()
  const path = searchParams.get('redirect')

  const handleSocilaLogin =  (provider)=>{
      const res =  signIn(provider, {redirect: true,
        callbackUrl : path ? path : "/"
      })
  }
 
    return (
        <div className="flex items-center justify-center space-x-3">
        <button
        onClick={()=> handleSocilaLogin('google')}
         className="btn  flex items-center justify-center text-orange-500">
          <BsGoogle />
        </button>
  
        <button 
      
        onClick={()=>handleSocilaLogin('github')}
          className="btn  flex items-center justify-center text-primary">
          <BsGithub />
        </button>
      </div>
    );
};

export default SocialSignin;