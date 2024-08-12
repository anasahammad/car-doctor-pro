"use client"
import SocialSignin from '@/components/shared/SocialSignin';
import Image from 'next/image';



import Link from 'next/link';


const SignUp = () => {

    

    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        const newUser = {
            name, email, password
        }
        console.log(newUser);

        const res = await fetch(`${process.env.BASE_URL}/signup/api`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
       
        if(res.status === 200){
            form.reset()
        }

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row  gap-16">
                <div className="w-1/2 mr-12">
                <Image width={400} height={400} src="/assets/images/login/login.svg" alt="login image" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border rounded-none bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div>
                        <h6 className="my-12 text-center">or sign in with</h6>
                        <SocialSignin/>

                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' href="/login">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;