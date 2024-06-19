"use client"

// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import axios from "axios";
import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import {signIn} from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";



const Login = () => {
 const router = useRouter()
  const searchParams = useSearchParams()
  const path = searchParams.get('redirect')

  
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    
   const res = await signIn("credentials", {
    email,
    password, 
    redirect: true,
    callbackUrl : path ? path : "/"
   })
    console.log(res);
    if(res.status === 2000){
      router.push('/')
    }

  };

  return (
    <div className="hero  min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-16 lg:flex-row">
        <div className="w-1/2 mr-12">
          <Image width={400} height={400} src="/assets/images/login/login.svg" alt="login image" />
        </div>
        <div className="card flex-shrink-0 w-full rounded-none max-w-sm border bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>


            </form>
            <div>
            <h6 className="my-12 text-center">or sign in with</h6>
            <SocialSignin/>
            <p className="my-4 text-center">
              New to Car Doctors{" "}
              <Link className="text-orange-600 font-bold" href="/signup">
                Sign Up
              </Link>{" "}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;