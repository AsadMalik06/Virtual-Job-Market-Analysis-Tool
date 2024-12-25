import React from 'react'

const page = () => {
  return (


    <>

      <h1 className='text-center my-4 text-3xl font-bold text-gray-700'>I am Asad Naeem Malik, a Software Engineer</h1>

      <div className='flex flex-col md:flex-row justify-center gap-10 items-center'>

      <div className="text h-[250px] bg-gray-200 w-[80vw] md:w-[50vw] p-6 rounded-2xl">
          <p className='text-gray-700 text-xl font-bol'>FA23-BSE-127</p>
          <p className='my-6'>I am a passionate Web Developer, aiming to create a future for myself in the industry by bringing quality to my Work</p>

          <button className='bg-green-700 hover:bg-green-800 text-white p-2 cursor-pointer rounded relative float-end'>hire me</button>
        </div>

        
        <img src="/me.PNG" width={400} alt="" />

       
      </div>




    </>
  )
}

export default page