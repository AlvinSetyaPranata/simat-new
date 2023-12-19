import React from 'react'

export default function Absence() {
    return (
        <div className='px-6 py-8 container w-full'>

            <div className='flex-1 mb-12'>
                {/* table heading that include search bar */}
                <div className='w-full flex justify-end mb-12'>
                    <input type="text" placeholder='hello' className='text-sm outline-none' />
                </div>


                {/* table content */}

                <table className='w-full text-sm font-medium'>
                    <thead>
                        <tr className='border-b-[1px] border-gray-300'>
                            <th className='pb-4'>No</th>
                            <th className='pb-4'>Nama</th>
                            <th className='pb-4'>NPM</th>
                            <th className='pb-4'>Kehadiran</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-4 text-center'>1</td>
                            <td className='p-4 text-center'>Alvin Setya Pranata</td>
                            <td className='p-4 text-center'>202202 01 00094</td>
                            <td className='p-4 text-center grid place-items-center'>
                                <div className='flex flex-col space-y-3 items-end'>
                                    <div>
                                        <span className='font-medium mr-1'>Sakit</span>
                                        <input type="radio" name="2022020100094" id="2022020100094" />
                                    </div>
                                    <div>
                                        <span className='font-medium mr-1'>Izin</span>
                                        <input type="radio" name="2022020100094" id="2022020100094" />
                                    </div>
                                    <div>
                                        <span className='font-medium mr-1'>Alfa</span>
                                        <input type="radio" name="2022020100094" id="2022020100094" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* summary */}
            <div className="sticky left-0 top-0 h-full px-2 border-t-[1.5px] border-gray-400 pt-6">
                <h2 className='font-semibold text-lg mb-12'>Ringkasan</h2>
                
                {/* summary form container */}
                <div className="grid grid-cols-3 text-sm">
                    <div className='space-y-4'>
                        <p>Guru Pengajar</p>
                        <input type="text" defaultValue="Alvin Setya" readOnly={true} className='outline-none'/>
                    </div>
                    <div className='space-y-4'>
                        <p>Guru Pengajar</p>
                        <input type="text" />
                    </div>
                        <div className='space-y-4'>
                            <p>Guru Pengajar</p>
                            <input type="text" />
                        </div>
                </div>
            </div>

        </div>
    )
}
