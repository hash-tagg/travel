import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // <footer className="bg-white shadow-2xl text-gray-900 py-4 outline outline-gray-300 bottom-0 w-full">
    //   <div div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    //     <div className="container mx-auto flex justify-between items-center">
    //       <p>&copy; 2023 Travel Adviser</p>
    //       <div>
    //         <a href="#" className="hover:text-red-600 mx-2">
    //           About
    //         </a>
    //         <a href="#" className="hover:text-red-600 mx-2">
    //           Contact Us
    //         </a>
    //       </div>
    //     </div>
    //     <Link to="/admin/login">Admin Login</Link>
    //   </div>
    // </footer>
    
<footer class="bg-white shadow dark:bg-white-50 m-26">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Travel Advisor</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 dark:text-gray-600">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-red-700 lg:my-8" />
        <span class="block text-sm text-sky-400/100 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Travel Advisor</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
}

export default Footer;
