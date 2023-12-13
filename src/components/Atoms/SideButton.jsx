import React from 'react'

export default function SideButton({ active, onClick }) {
  return (
    <button className='w-full flex justify-center' onClick={onClick}>
      <div className='w-[90%] flex justify-between items-center'>
        <h2 className='text-bold'>Perkuliahan</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${active ? 'rotate-90' : ''} w-3 h-3 transition-all duration-200 ease-in`} height="16" width="10" viewBox="0 0 320 512"><path fill="white" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>


      </div>
    </button>
  )
}
