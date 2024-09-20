"use client";
import Image from 'next/image';
import styles from './nav.module.scss';
import logo from './logo lucci carre.jpg';
import Link from 'next/link';
import { useState } from 'react'

export default () => {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Acceuil", path: "/" },
      { title: "Filiales", path: "/filiales" },
      { title: "À propos", path: "/a-propos" },


  ]

  return (
      <nav className="bg-white w-full h-32 mt-6 relative relative z-30">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 bg-white">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                   <h1 className='font-bold text-lg'>Zayani Group.</h1>
                    </a>
                    <div className='flex'>
                    <div className="md:hidden pt-2 pr-2">
                <a href="/contact" className="py-3 px-4 text-white bg-red-700 hover:bg-red-600 rounded-md shadow ">
                    Contact
                </a>
              </div>
                  <div className="md:hidden relative relative z-30 bg-white">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
                  </div>
              </div>
              
              <div className={`flex-1 bg-white relative z-30 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-gray-600 hover:text-red-600">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              <div className="hidden md:inline-block ">
                <a href="/contact" className="py-3 px-4 text-white bg-red-700 hover:bg-red-600 rounded-md shadow ">
                    Contact
                </a>
              </div>
          </div>
      </nav>
  )
}