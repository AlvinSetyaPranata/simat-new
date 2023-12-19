import React, { useEffect, useMemo, useReducer } from 'react'

export default function AcademicCallendar({nextAction}) {
    const callendarReducer = (state, action) => {
        switch (action.type) {
            case "changeMonth":
                if (action.value > 12) {
                    return { year: state.year + 1, month: 1, datesInMonth: state.datesInMonth }
                } else if (action.value < 1) {
                    return { year: state.year - 1, month: 12, datesInMonth: state.datesInMonth }
                }
                return { year: state.year, month: action.value, datesInMonth: state.datesInMonth }

            case "changeYear":
                return { year: action.value, month: state.month, datesInMonth: state.datesInMonth }

            case "changeDate":
                return { year: state.year, month: state.month, datesInMonth: action.value }
                
            case "changeSelectedDate":
                return { year: state.year, month: state.month, datesInMonth: action.value, selectedDate: action.value }

        }
    }

    const month = [
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

    const [state, dispatch] = useReducer(callendarReducer, { datesInMonth: [], month: new Date().getMonth(), year: new Date().getFullYear(), selectedDate: 0 })

    const dateObject = new Date()
    const currentDate = dateObject.getDate()
    const currentMonth = dateObject.getMonth()

    useMemo(() => {

        const previousDates = []
        const dates = []
        const nextDates = []

        const firstDate = new Date(state.year, state.month, 1).getDay()
        const lastDate = new Date(state.year, state.month + 1, 0).getDate()
        const endDay = new Date(state.year, state.month, lastDate).getDay()
        const previousMonthLastDay = new Date(state.year, state.month, 0).getDate()



        for (let i = firstDate; i > 0; i--) {
            previousDates.push(previousMonthLastDay - i + 1)
        }


        for (let i = 1; i <= lastDate; i++) {
            dates.push(i)
        }

        for (let i = endDay; i < 6; i++) {
            nextDates.push(i - endDay + 1)
        }

        dispatch({type: "changeDate", value: [previousDates, dates, nextDates]})

    }, [state.month, state.year])


    useEffect(() => {console.log(state.datesInMonth[0])}, [state.month])


    const updateMonth = (condition) => {

        if (condition == "increase") {
            return dispatch({ type: "changeMonth", value: state.month + 1 })
        } else if (condition == "decrease") {
            return dispatch({ type: "changeMonth", value: state.month - 1 })
        }
    }


    const onDateClick = (date, month, year, type) => {
        if (type == "next") {
            dispatch({type: "changeMonth", value: month + 1})
        } else if (type == "prev") {
            dispatch({type: "changeMonth", value: month - 1})
        }
        nextAction(date, month, year)
    }

    // shadow-2xl ring-1 ring-black ring-opacity-5

    return (
        <div className='rounded-md py-8 px-8 w-[700px] box-border overflow-hidden border-[1.8px] border-gray-300'>
            {/* heading */}
            <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-1 text-2xl font-medium'>
                    <h3>{month[state.month - 1]}</h3>
                    <h3>{state.year}</h3>
                </div>

                {/* previous + next buttons */}
                <div className='flex items-center gap-3'>
                    {/* - */}
                    <button onClick={() => updateMonth("decrease")} className='outline-none border-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 rotate-180' viewBox="0 0 320 512"><path className='fill-gray-500' d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </button>

                    {/* + */}
                    <button onClick={() => updateMonth("increase")} className='outline-none border-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 320 512"><path className='fill-gray-500' d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </button>
                </div>
            </div>


            {/* dates */}
            <div className='grid grid-cols-7 mt-16 w-full gap-4'>
                {/* days */}
                {["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"].map((day, key) => (
                    <div className='font-medium' key={key}>{day}</div>
                ))}


                {/* dates */}

                {/* date in previous month */}
                {state.datesInMonth[0] && state.datesInMonth[0].map((date, key) => (
                    <button className={`rounded-full grid place-items-center w-12 h-12 ${currentDate == date && currentMonth == state.month ? 'text-white bg-blue-500' : 'text-gray-500 bg-white hover:bg-gray-200'}`} key={key} onClick={() => onDateClick(date, state.month, state.year, "prev")}>{date}</button>
                ))
                }

                {/* dates in current month */}
                {state.datesInMonth[1] && state.datesInMonth[1].map((date, key) => (
                    <button className={`rounded-full grid place-items-center w-12 h-12 ${currentDate == date && currentMonth == state.month ? 'text-white bg-blue-500' : 'text-black bg-white hover:bg-gray-200'}`} key={key} onClick={() => onDateClick(date, state.month, state.year, "")}>{date}</button>
                ))
                }

                {/* dates in next month */}
                {state.datesInMonth[2] && state.datesInMonth[2].map((date, key) => (
                    <button className={`rounded-full grid place-items-center w-12 h-12 ${currentDate == date && currentMonth == state.month ? 'text-white bg-blue-500' : 'text-gray-500 bg-white hover:bg-gray-200'}`} key={key} onClick={() => onDateClick(date, state.month, state.year, "next")}>{date}</button>
                ))
                }



            </div>
        </div>
    )
}
