import React, { useState } from 'react'
import Logo from '../assets/logo-light.png'
import SideDropdown from './Molecules/SideDropdown'

export default function Navbar() {

    const [active, setActive] = useState(0)

    const handleOnClick = (id) => {
        if (active == id) {
            setActive(state => !state) // Toogle between on or off
        } else {
            setActive(id)
        }
    }

    const isActive = (id) => active == id ? true : false


    return (
        <div className='max-w-[240px] bg-slate-700 min-h-screen text-sm text-white font-medium font-primary'>
            {/* logo */}
            <div className='flex justify-center w-full pt-8'>
                <img src={Logo} alt="logo" className='h-[30px]' />
            </div>

            {/* nav-content */}

            <div className="pt-12">
                <SideDropdown buttonProps={{onClick: () => handleOnClick(1), active: isActive(1)}} subMenus={['Jadwal Mengajar', 'Daftar Kelas', 'Daftar Mahasiswa']}/>
                <SideDropdown buttonProps={{onClick: () => handleOnClick(2), active: isActive(2)}} subMenus={['Jadwal Mengajar', 'Daftar Kelas', 'Daftar Mahasiswa']}/>
            </div>
        </div>
    )
}
