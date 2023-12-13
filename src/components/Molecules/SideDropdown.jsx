import React from 'react'
import SideButton from '../Atoms/SideButton'

export default function SideDropdown({buttonProps, subMenus}) {

  return (
    <div className='py-4'>
        <SideButton {...buttonProps}/>
        <div className={`grid gap-6 px-6 w-full mt-6 text-sm overflow-y-hidden ${buttonProps.active ? 'h-max block' : 'h-0 hidden'}`}>
            {subMenus.map((name, key) => (
                <button className='w-full text-left font-normal' key={key}>{name}</button>
            ))

            }
        </div>
    </div>
  )
}
