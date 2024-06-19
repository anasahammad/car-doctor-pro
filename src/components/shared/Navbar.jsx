"use client"

import Image from "next/image";
import Link from "next/link";
import { PiHandbagLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {

    const session = useSession()
    console.log(session);
  
    return (
        <div className="bg-base-100 text-slate-900">

<div className="navbar container mx-auto">
        <div className="navbar-start">
          {/* dropdown */}
         <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" height={60} width={100}/>
         </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          
        <div className="flex justify-center items-center space-x-6">
        {
            navLinks?.map(item=> <Link className="font-semibold hover:text-primary duration-300" href={item.path} key={item.title}>{item.title}</Link>)
          }
        </div>
          
        </div>
        <div className="navbar-end">

            <div className="flex space-x-3 items-center">
            <PiHandbagLight className="text-xl"/>
            <CiSearch className="text-xl"/>
            <a className="btn btn-outline btn-primary ">Appointment</a>
            {!session?.data ?  <Link href="/login" className="btn btn-primary px-8">Login</Link> : 
                <button className="btn btn-primary px-8"  onClick={()=>signOut()}>Logout</button>
            }
            </div>
         
        </div>
      </div>
        </div>
    );
};

const navLinks = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "My-Bookings",
        path: "/my-bookings"
    },
]

export default Navbar;