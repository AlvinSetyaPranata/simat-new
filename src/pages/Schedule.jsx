import React from 'react'
import ScheduleCard from '../components/Atoms/ScheduleCard'

export default function Schedule() {
  return (
    <div className='px-6 py-8 container space-y-20'>
      {/* schedule in weeks container */}
      <div>
        <h1 className='mb-6 text-xl font-bold'>Senin</h1>
        
        {/* cards container */}
        <div className='w-full grid grid-cols-3 gap-8'>
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
        </div>        
      </div>

      <div>
        <h1 className='mb-6 text-xl font-bold'>Selasa</h1>
        
        {/* cards container */}
        <div className='w-full grid grid-cols-3 gap-8'>
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
        </div>        
      </div>




    </div>
  )
}
