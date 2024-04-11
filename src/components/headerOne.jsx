import { useState } from "react"

import { AlignRight, X } from 'lucide-react'

export function HeaderOne(){
  const [ open, setOpen ] = useState(false)

  function toogleMenu(){
    setOpen(!open)
  }

  return(
    <nav class="border-gray-200 bg-gray-100">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly lg:justify-between mx-auto ">
      <a href="#" class="p-4 flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap ">LOGO</span>
      </a>
      
      <div onClick={()=>setOpen(!open)} className='inline-flex items-center p-2  justify-center text-sm text-gray-500 rounded-lg md:hidden hover:cursor-pointer'>
        { open ? <X color="#000" className="size-8"/> : <AlignRight color="#000" className="size-8"/>}
      </div>
     

      <div class={`${open ? 'top-[-180px]' : ' top-[46px]'} absolute transition-all z-[-1] md:z-10 md:pr-4 duration-200 ease-in w-full md:static  md:block md:w-auto`} id="navbar-solid-bg">
        <ul class="flex flex-col font-medium mt-4 bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
          <li onClick={() => setOpen(!open)}>
            <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded md:bg-transparent md:hover:text-blue-700 md:duration-150" aria-current="page">Home</a>
          </li>
          <li onClick={() => setOpen(!open)}>
            <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:duration-150">Services</a>
          </li>
          <li onClick={() => setOpen(!open)}>
            <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:duration-150">Pricing</a>
          </li>
          <li onClick={() => setOpen(!open)}>
            <a href="#" class="block pt-2 pb-6 px-4 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:duration-150">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}