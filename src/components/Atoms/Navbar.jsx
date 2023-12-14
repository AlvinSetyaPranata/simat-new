import React, { useState } from 'react'

export default function Navbar({ onClick }) {

    const [accountBoxActive, setAccountBoxActive] = useState(false)

    return (
        <div className='w-full bg-slate-700 py-6 px-4 box-border flex gap-24'>
            <button onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {/* search bar */}
            <div className='w-[300px] rounded-md bg-white py-2 px-3 flex items-center gap-x-3'>
                <input type="text" placeholder="Cari sesuatu" className='outline-none w-full text-sm' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>


            {/* account widgets */}

            <div className='flex items-center justify-end flex-1 px-2 gap-x-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>


                {/* account button action group */}
                <div className='relative'>
                    <button className='flex items-center gap-1' onClick={() => setAccountBoxActive(true)}>
                        {/* account image */}
                        <div className='rounded-full p-4 bg-red-500'></div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3 rotate-180' viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" fill='white' /></svg>
                    </button>

                    {/* options popover */}
                    <div className={`bg-white rounded-md py-3 p-4 absolute right-1 top-12 text-sm w-max shadow-2xl ring-1 ring-black ring-opacity-5 ${accountBoxActive ? 'grid' : 'hidden'} z-30`}>
                        <p className='w-full font-semibold'>Hai, Alvin</p>

                        <div className='grid mt-4 gap-2'>
                            <button className='text-left'>Akun Anda</button>
                            <button className='text-left'>Pengaturan</button>
                            <button className='text-left'>Kunci Layar</button>
                        </div>
                    </div>


                </div>
                {/* div that listen to change options popover state */}
                <div className={`absolute w-full h-full left-0 top-0 bg-transparent z-20 ${accountBoxActive ? 'block' : 'hidden'}`} onClick={() => setAccountBoxActive(false)}></div>
            </div>
        </div>
    )
}
