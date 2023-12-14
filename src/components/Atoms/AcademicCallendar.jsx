import React, { useMemo, useReducer } from 'react'

export default function AcademicCallendar() {
    const callendarReducer = (state, action) => {
        switch(action.type) {
            case "changeMonth":
                return { year : state.year, month : action.value}
                
            case "changeYear":
                return { year : action.value, month : state.month}

        }
    }

    const [state, dispatch] = useReducer(callendarReducer, { month: new Date().getMonth(), year: new Date().getFullYear() })

    const datesInMonth = []

    useMemo(() => {
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()


        const firstDate = new Date(year, month, 1).getDay()
        const lastDate = new Date(year, month + 1, 0).getDate()
        const endDay = new Date(year, month, lastDate).getDay()
        const previousMonthLastDay = new Date(year, month, 0).getDate()



        for (let i = firstDate; i > 0; i--) {
            datesInMonth.push(previousMonthLastDay - i + 1)
        }


        for (let i = 1; i <= lastDate; i++) {
            datesInMonth.push(i)
        }

        for (let i = endDay; i < 6; i++) {
            datesInMonth.push(i - endDay + 1)
        }

    }, [state])

    const updateMonth = (condition) => {
        
        if (condition == "increase" && state.month <= 12) {
            console.log(state.month);
            return dispatch({type: "changeMonth", value: state.month + 1})
        } else if (condition == "decrease" && state.month >= 1) {
            return dispatch({type: "changeMonth", value: state.month - 1})
        }
    }


    return (
        <div className='rounded-md bg-red-500 py-6 px-8'>
            {/* heading */}
            <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-1 text-xl font-medium'>
                    <h3>April</h3>
                    <h3>2023</h3>
                </div>

                {/* previous + next buttons */}
                <div className='flex items-center gap-3'>
                    {/* - */}
                    <button onClick={() =>  updateMonth("increase")} className='outline-none border-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 rotate-180' viewBox="0 0 320 512"><path fill='white' d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </button>

                    {/* + */}
                    <button onClick={() =>  updateMonth("decrease")} className='outline-none border-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 320 512"><path fill='white' d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </button>
                </div>
            </div>


            {/* dates */}
            <div className='grid grid-cols-7 mt-16 w-full gap-6'>
                {/* days */}
                {["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"].map((day, key) => (
                    <div key={key}>{day}</div>
                ))}


                {/* dates */}
                {datesInMonth.map((date, key) => (
                    <div className='rounded-full grid place-items-center w-12 h-12 bg-blue-500' key={key}>{date}</div>
                ))

                }

            </div>
        </div>
    )
}
