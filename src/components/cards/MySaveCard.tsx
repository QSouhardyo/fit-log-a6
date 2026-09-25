'use client'
import { WorkContext } from '@/context/WorkProvider';
import { Iworkout } from '@/type/type';
import { Clock, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const MySaveCard = ({ workout }: { workout: Iworkout }) => {

    const { saveBtn, setSaveBtn } = useContext(WorkContext);

    const handleRemove = (id: number) => {
        const remove = saveBtn.filter((item) => item.id !== id);
        setSaveBtn(remove)
        toast.error('Deleted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div
            key={workout.id}
            className="group rounded-xl border border-[#232834] bg-[#222630] overflow-hidden hover:border-[#C2F800]/50 transition"
        >

            <div className="flex flex-col sm:flex-row">

                {/* IMAGE */}

                <div className="relative w-full sm:w-52 h-52 sm:h-auto shrink-0 overflow-hidden">

                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                    />

                </div>


                {/* CONTENT */}

                <div className="flex-1 p-5 sm:p-6">

                    {/* NAME */}

                    <h2 className="text-xl font-bold uppercase text-white group-hover:text-[#C2F800] transition">
                        {workout.name}
                    </h2>


                    {/* EQUIPMENT + BUTTONS */}

                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                        {/* EQUIPMENT */}

                        <div className="text-sm text-gray-400">
                            {workout.equipment}
                        </div>


                        {/* BUTTONS */}

                        <div className="flex items-center gap-2 shrink-0">

                            {/* View Details */}

                            <Link href={`/workout/${workout.id}`}
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-gray-600 text-gray-300 text-xs font-bold uppercase tracking-wide hover:border-[#C2F800] hover:text-[#C2F800] transition"
                            >




                                View Details


                            </Link>






                            {/* DELETE */}

                            <button
                                onClick={() =>
                                    handleRemove(workout.id)
                                }
                                className="p-2.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition"
                                aria-label="Remove workout"
                            >

                                < X className="w-5 h-5" />

                            </button>

                        </div>

                    </div>


                    {/* INFO */}

                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">

                        {/* Duration */}

                        <div className="flex items-center gap-2">

                            <Clock className="w-4 h-4 text-[#C2F800]" />

                            <span>
                                {workout.duration} min
                            </span>

                        </div>


                        {/* Calories */}

                        <div className="flex items-center gap-2">

                            <Flame className="w-4 h-4 text-[#C2F800]" />

                            <span>
                                {workout.caloriesBurned} kcal
                            </span>

                        </div>


                        {/* Rating */}

                        <div className="flex items-center gap-2">

                            <Star className="w-4 h-4 text-[#C2F800]" />

                            <span>
                                {workout.rating}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default MySaveCard;