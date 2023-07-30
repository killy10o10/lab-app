import { useEffect, useState } from "react";
import lab1 from "../assets/images/lab1.jpg";
import lab2 from "../assets/images/lab2.jpg"
import lab3 from "../assets/images/lab3.jpg"
import lab4 from "../assets/images/lab4.png"
import lab5 from "../assets/images/lab5.jpg"
import lab6 from "../assets/images/lab6.jpg"
import lab7 from "../assets/images/lab7.jpg"
import lab8 from "../assets/images/lab8.jpg"
import lab9 from "../assets/images/lab9.png"
import lab10 from "../assets/images/lab10.jpg"
import { Button, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";


function Login() {
  const imageArray = [lab1, lab2, lab3, lab4, lab5, lab6, lab7, lab8, lab9, lab10];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
      }, 10000);
      return () => clearInterval(interval);
    }, [])

  const currentImageUrl = imageArray[currentImageIndex];


  return(
    <section style={{
      backgroundImage: `url(${currentImageUrl})`,

      }} className="h-screen  bg-cover bg-center transition-opacity duration-500">
      <div className="h-screen  bg-trans-orange flex items-center flex-col gap-5 justify-center p-5">
        <Typography variant="h1" className="font-poppins text-blue-600">Log In</Typography>
        <form className="bg-trans-white rounded-xl shadow-md p-5 h-[40vh] w-[100%] lg:w-[30vw] flex flex-col gap-10 items-center justify-center">
           <div className="lg:w-4/5 w-[100%] self-center flex flex-col gap-8" >
              <Input label="username" />
              <Input  label="password" type="password" />
           </div>
         <div>
             <Link to="patients">
                <Button>Log In</Button>
             </Link>
         </div>
            
        </form>
      </div>
    </section>
  )
}

export default Login;