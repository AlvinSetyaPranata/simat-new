import React, { useEffect, useState } from 'react'
import AcademicCallendar from '../Atoms/AcademicCallendar'

export default function CallenderSchedule() {
    const [date, setDate] = useState("Today")

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const onDateClick = (date, month, year) => setDate(`${months[month]} ${date}`)



  return (
    <div>
        <div className='w-[300px] border-[1.5px] border-gray-400 box-border p-4 mb-14 rounded-md'>
            <h3 className='font-medium mb-2'>{date}</h3>
            <p className='text-gray-400'>Tidak ada event tersedia</p>
        </div>
        <AcademicCallendar onDateClick={onDateClick}/>
    </div>
  )
}
