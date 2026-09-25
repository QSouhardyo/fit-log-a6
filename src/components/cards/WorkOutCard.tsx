import React from 'react';
import { Clock, Flame, Star } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';


const WorkOutCard = ({ workData }) => {
    return (
        <Link
            href={`/workout/${workData.id}`}
            className="group  bg-[#20242E] border border-gray-700 rounded-xl overflow-hidden hover:border-[#C2F800] transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-dark-600">
                <Image
                    src={workData.image}
                    alt={workData.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

            </div>

            <div className="p-4">
                <div className=" flex flex-wrap gap-1.5 mb-3">
                    {workData.muscleGroups.map((g) => (
                        <span
                            key={g}
                            className="px-2 py-0.5 text-[10px]  uppercase  bg-[#C2F800] text-black rounded-full "
                        >
                            {g}
                        </span>
                    ))}
                </div>
                <h3 className="font-semibold text-white group-hover:text-[#C2F800] transition-colors line-clamp-1">
                    {workData.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{workData.equipment}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C2F800]" />
                        {workData.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-orange-400" />
                        {workData.caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-400" />
                        {workData.rating}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default WorkOutCard;