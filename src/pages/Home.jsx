import React from 'react'
import CallenderSchedule from "../components/Molecules/CallenderSchedule"


export default function Home() {



    return (
        <div div className="px-6 py-8 container space-y-20" >
            <section>
                <h1 className="font-medium text-xl mb-8">Ringkasan</h1>

                <div className="grid grid-cols-2 gap-6">

                    <div className="rounded-md bg-gray-300 p-4">
                        <h3 className="text-sm font-medium">Matkul Hari ini</h3>
                        <h2 className="text-right text-2xl font-bold">13</h2>
                    </div>

                    <div className="rounded-md bg-gray-300 p-4">
                        <h3 className="text-sm font-medium">Rangking Dosen</h3>
                        <h2 className="text-right text-2xl font-bold">1</h2>
                    </div>

                    <div className="rounded-md bg-gray-300 p-4">
                        <h3 className="text-sm font-medium">Total Kelas</h3>
                        <h2 className="text-right text-2xl font-bold">4</h2>
                    </div>
                    <div className="rounded-md bg-gray-300 p-4">
                        <h3 className="text-sm font-medium">Status Dosen</h3>
                        <h2 className="text-right text-2xl font-bold">Aktif</h2>
                    </div>
                </div>
            </section>

            <section>
                <h1 className="font-medium text-xl mb-8">Jadwal hari ini</h1>
                <div className="rounded-md bg-gray-300 py-8 w-full space-y-8">
                    {/* data */}
                    <div className="w-full flex justify-evenly">
                        <p>1</p>
                        <p>PEMOGRAMAN BERORIENTASI OBJEK</p>
                        <p>TI-A</p>
                        <p>19.00</p>
                    </div>
                    <div className="w-full flex justify-evenly">
                        <p>2</p>
                        <p>PEMOGRAMAN BERORIENTASI OBJEK</p>
                        <p>TI-A</p>
                        <p>19.00</p>
                    </div>

                </div>
            </section>

            {/* callender universitas */}
            <section>
                <h1 className="font-medium text-xl mb-8">Kalender Akademik</h1>
                <CallenderSchedule />
            </section>


        </div>
    )
}
