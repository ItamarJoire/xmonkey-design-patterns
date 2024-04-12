import { useState } from "react"

export function AccordionOne(){
  const [show, setShow] = useState(false)

  return(
    <div onClick={() => setShow(!show)} id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white text-gray-900 " data-inactive-classes="text-gray-500 ">
      <h2 id="accordion-flush-heading-1">
        <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-20 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
        <span>Questão 01?</span>
        <svg data-accordion-icon class={`w-3 h-3 shrink-0 transform-all origin-center  transition duration-200 ease-out ${show ? 'rotate-180' : 'rotate-90'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-1" class={` transition-opacity duration-300 ease-in-out  ${show ? 'block opacity-100' : 'hidden opacity-0'} `} aria-labelledby="accordion-flush-heading-1">
      <div class="py-5 border-b border-gray-200 ">
        <p class="mb-2 text-gray-500 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
        <p class="text-gray-500 ">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600  hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
      </div>
    </div>
  </div>

  )
}