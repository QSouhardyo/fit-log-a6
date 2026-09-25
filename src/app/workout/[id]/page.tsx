import React from 'react';
import {
    Clock,
    Flame,
    Star,
    Plus,
    Bookmark,
    Dumbbell,
    BarChart3,
    Layers,
    Target,
    CalendarPlus2
} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from "next/navigation";
import AddBtn from '@/components/buttons/AddBtn';
import SaveBtn from '@/components/buttons/SaveBtn';

const WorkOutDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    if (!res.ok) {
        return notFound();
    }

    const workout = await res.json();



    return (
        <main className="min-h-screen bg-dark-900 text-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                {/* Main Details */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

                    {/* LEFT - IMAGE */}
                    <div className="w-full h-full">

                        <div className="overflow-hidden rounded-xl bg-dark-800 h-full">

                            <Image
                                src={workout.image}
                                alt={workout.name}
                                width={700}
                                height={700}
                                className="w-full h-full object-cover"
                            />

                        </div>

                    </div>


                    {/* RIGHT - DETAILS */}
                    <div>

                        {/* Title */}
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-bold uppercase text-white">
                            {workout.name}
                        </h1>


                        {/* Description */}
                        <p className="mt-5 text-gray-400 text-base sm:text-md leading-relaxed max-w-xl">
                            {workout.description}
                        </p>


                        {/* Muscle Groups */}
                        <div className="mt-6 flex flex-wrap gap-2">

                            {workout?.muscleGroups?.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="text-sm bg-[#C2F800] rounded-full text-black px-4 py-2"
                                >
                                    {muscle}
                                </span>
                            ))}

                        </div>


                        {/* Workout Information */}
                        <div className="mt-8 rounded-xl border border-[#232834] bg-[#222630] overflow-hidden">

                            <table className="w-full">

                                <tbody>

                                    {/* Equipment */}
                                    <tr className="border-b border-gray-700">

                                        <td className="px-5 py-4 text-sm">
                                            Equipment
                                        </td>

                                        <td className="px-5 py-4 text-sm text-right">
                                            {workout.equipment}
                                        </td>

                                    </tr>


                                    {/* Difficulty */}
                                    <tr className="border-b border-gray-700">

                                        <td className="px-5 py-4 text-sm">
                                            Difficulty
                                        </td>

                                        <td className="px-5 py-4 text-sm text-right">
                                            {workout.difficulty}
                                        </td>

                                    </tr>


                                    {/* Sets */}
                                    <tr className="border-b border-gray-700">

                                        <td className="px-5 py-4 text-sm">
                                            Sets
                                        </td>

                                        <td className="px-5 py-4 text-sm text-right">
                                            {workout.sets}
                                        </td>

                                    </tr>


                                    {/* Reps */}
                                    <tr className="border-b border-gray-700">

                                        <td className="px-5 py-4 text-sm">
                                            Reps
                                        </td>

                                        <td className="px-5 py-4 text-sm text-right">
                                            {workout.reps}
                                        </td>

                                    </tr>


                                    {/* Duration */}
                                    <tr className="border-b border-gray-700">

                                        <td className="px-5 py-4 text-sm">
                                            Duration
                                        </td>

                                        <td className="px-5 py-4 text-sm text-right">
                                            {workout.duration} min
                                        </td>

                                    </tr>


                                    {/* Calories */}
                                    <tr className="border-b border-gray-700">

                                        <td className="px-5 py-4 text-sm">
                                            Calories Burned
                                        </td>

                                        <td className="px-5 py-4 text-sm text-right">
                                            {workout.caloriesBurned} kcal
                                        </td>

                                    </tr>


                                    {/* Rating */}
                                    <tr>

                                        <td className="px-5 py-4 text-sm">
                                            Rating
                                        </td>

                                        <td className="px-5 py-4 text-sm text-right text-[#C2F800] font-semibold">
                                            ★ {workout.rating}
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>


                        {/* INSTRUCTIONS */}
                        <div className="mt-16 lg:mt-20 max-w-4xl">

                            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                                Instructions
                            </h2>


                            <ol className="mt-6 space-y-4 list-decimal list-inside">

                                {workout?.instructions?.map((instruction, index) => (

                                    <li
                                        key={index}
                                        className="text-gray-400"
                                    >
                                        {instruction}
                                    </li>

                                ))}

                            </ol>


                            {/* BUTTONS */}
                            <div className="mt-8 flex flex-wrap gap-3">

                                <AddBtn workout={workout}></AddBtn>


                                <SaveBtn workout={workout}></SaveBtn>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default WorkOutDetailsPage;