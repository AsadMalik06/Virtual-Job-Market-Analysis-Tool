
import Link from "next/link";
export default function Home() {

  return (
    <>
      <div className="main md:flex justify-center gap-10 items-center ">


        <div className="left md:ml-10 mt-16 md:w-1/2 text-center md:text-left p-4 rounded-2xl ">
          <p className="text-green-900  my-6">Your Dream Carrier Begins with us</p>
          <h2 className="text-4xl font-bold text-gray-800  my-6">Looking for a Life Changing Career? Browse our Latest Jobs</h2>
          <p className="text-gray-700 my-6 space-y-2">At HireTask, you can get your dream job from the comfort of your home and create a difference in your life or post a job for a talented worker</p>
         <Link href="/Jobs"> <button className="text-white bg-green-700 hover:bg-green-800 rounded p-2 cursor-pointer">Browse Jobs</button>      </Link>

        </div>


        <div className="right bg-white rounded-full mt-5 justify-center mb-10 flex items-center  ">
          <img  src="/me.png" width={500} alt="" />
     

        </div>


      </div>


    </>
  );
}
