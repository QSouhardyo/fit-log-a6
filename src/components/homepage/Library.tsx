import React from 'react';
import WorkOutCard from '../cards/WorkOutCard';
import { Iworkout } from '@/type/type';

const getAllData = async (): Promise<Iworkout[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data
}

const Library = async () => {

    const workDatas = await getAllData()

    // console.log("Library", workDatas);


    return (
        <section id="library" className="py-16 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <div className='mb-10'>
                        <h2 className="font-display text-3xl sm:text-4xl uppercase text-white tracking-wide">
                            The Library
                        </h2>
                        <p className="mt-2 text-gray-400 text-sm">
                            Twelve lifts covering every major muscle group.
                        </p>
                    </div>



                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            workDatas.map((workData) => <WorkOutCard key={workData.id} workData={workData}></WorkOutCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Library;