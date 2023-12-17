import React from 'react'
import SideButton from '../Atoms/SideButton'
import { useNavigate } from 'react-router-dom'

export default function SideDropdown({buttonProps, subMenus}) {
  
  const navigation = useNavigate()

  return (
    <div className='py-4'>
        <SideButton {...buttonProps}/>
        <div className={`grid gap-6 px-8 w-full mt-6 text-sm overflow-y-hidden ${buttonProps.active ? 'h-max block' : 'h-0 hidden'}`}>
            {Object.keys(subMenus).map((url, key) => (
                <button onClick={() => navigation(url)} className='w-full text-left font-normal outline-none' key={key}>{subMenus[url]}</button>
            ))

            }
        </div>
    </div>
  )
}
