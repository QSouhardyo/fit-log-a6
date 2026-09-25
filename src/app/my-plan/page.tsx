"use client";

import { WorkContext } from "@/context/WorkProvider";
import React, { useContext, useState } from "react";
import Image from "next/image";
import {
    Clock,
    Flame,
    Star,
    Trash2,
    Bookmark,
    CalendarPlus2,
    Dumbbell,
} from "lucide-react";
import Link from "next/link";
import MyTodayCard from "@/components/cards/MyTodayCard";
import MySaveCard from "@/components/cards/MySaveCard";

const MyPlanPage = () => {
    const { addBtn, saveBtn, setAddBtn, setSaveBtn } = useContext(WorkContext);

    const [activeTab, setActiveTab] = useState("today");
    const [sortBy, setSortBy] = useState("duration");

    const totalExercises = addBtn.length;

    const totalMinutes = addBtn.reduce(
        (total, addBtn) => total + addBtn.duration,
        0
    );

    const totalCalories = addBtn.reduce(
        (total, addBtn) => total + addBtn.caloriesBurned,
        0
    );



    const handleRemove2 = (id) => {
        const remove = saveBtn.filter((item) => item.id !== id);
        setSaveBtn(remove)
    };

    const sortedWorkouts = [...addBtn].sort((a, b) => {

        if (sortBy === "duration") {
            return b.duration - a.duration;
        }

        if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });

    const sortedWorkouts2 = [...saveBtn].sort((a, b) => {

        if (sortBy === "duration") {
            return b.duration - a.duration;
        }

        if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });

    return (
        <main className="min-h-screen bg-dark-900 text-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                {/* ================= HEADER ================= */}

                <div>

                    <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase">
                        My Plan
                    </h1>

                    <p className="mt-3 text-gray-400 text-sm sm:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>

                </div>


                {/* ================= STATISTICS ================= */}

                <div className="grid grid-cols-1 sm:grid-cols-3 mt-8 rounded-xl border border-[#232834] bg-[#222630] overflow-hidden">

                    {/* Exercises */}

                    <div className="p-5 border-b sm:border-b-0 sm:border-r border-[#4a4a4a]">

                        <p className="text-xs uppercase tracking-wider text-gray-500">
                            Exercises
                        </p>

                        <p className="mt-2 text-3xl font-bold text-white">
                            {totalExercises}
                        </p>

                    </div>


                    {/* Minutes */}

                    <div className="p-5 border-b sm:border-b-0 sm:border-r border-[#4a4a4a]">

                        <p className="text-xs uppercase tracking-wider text-gray-500">
                            Minutes
                        </p>

                        <p className="mt-2 text-3xl font-bold text-white">
                            {totalMinutes}
                        </p>

                    </div>


                    {/* Calories */}

                    <div className="p-5">

                        <p className="text-xs uppercase tracking-wider text-gray-500">
                            Calories
                        </p>

                        <p className="mt-2 text-3xl font-bold text-white">
                            {totalCalories}
                        </p>

                    </div>

                </div>


                {/* ================= TABS + SORT ================= */}

                <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    {/* ================= TABS ================= */}

                    <div className="tabs tabs-box">

                        {/* Today's Plan */}

                        <input
                            type="radio"
                            name="my_tabs_1"
                            className={`tab ${activeTab === "today"
                                ? "text-[#C2F800]"
                                : "text-gray-400"
                                }`}
                            aria-label="Today's Plan"
                            checked={activeTab === "today"}
                            onChange={() => setActiveTab("today")}
                        />


                        {/* Saved */}

                        <input
                            type="radio"
                            name="my_tabs_1"
                            className={`tab ${activeTab === "saved"
                                ? "text-[#C2F800]"
                                : "text-gray-400"
                                }`}
                            aria-label="Saved"
                            checked={activeTab === "saved"}
                            onChange={() => setActiveTab("saved")}
                        />

                    </div>


                    {/* ================= SORT ================= */}

                    <div className="flex items-center gap-3">

                        <label
                            htmlFor="sort"
                            className="text-sm text-gray-500"
                        >
                            Sort By
                        </label>

                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-[#222630] border border-[#232834] rounded-lg px-4 py-2 text-sm text-white outline-none focus:border-[#C2F800]"
                        >

                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>

                        </select>

                    </div>

                </div>


                {/* ================= TODAY'S PLAN ================= */}

                {activeTab === "today" && (

                    <div className="mt-6 space-y-4">

                        {sortedWorkouts.map((workout) => (

                            <MyTodayCard key={workout.id} workout={workout} ></MyTodayCard>

                        ))}

                    </div>

                )}


                {/* ================= SAVED ================= */}

                {activeTab === "saved" && (

                    <div className="mt-6">

                        {saveBtn && saveBtn.length > 0 ? (

                            <div className="space-y-4">

                                {sortedWorkouts2.map((workout) => (

                                    <MySaveCard key={workout.id} workout={workout}></MySaveCard>

                                ))}

                            </div>

                        ) : (

                            /* EMPTY SAVED */

                            <div className="text-center bg-[#232732] py-16">
                                <Dumbbell className="w-12 h-12 text-dark-500 mx-auto mb-4" />
                                <h3 className="font-display text-xl uppercase text-white tracking-wide">
                                    Nothing Here Yet
                                </h3>
                                <p className="mt-2 text-gray-500 text-sm max-w-xs mx-auto">
                                    Browse the library and add a lift to get today moving.
                                </p>
                                <Link
                                    href="/"
                                    className="inline-flex mt-6 px-6 py-3 bg-[#C2F800] text-black font-bold uppercase tracking-wide text-sm rounded-lg "
                                >
                                    Go to workouts
                                </Link>
                            </div>

                        )}

                    </div>

                )}


                {/* ================= EMPTY TODAY'S PLAN ================= */}

                {activeTab === "today" && addBtn.length === 0 && (

                    <div className="text-center bg-[#232732] py-16">
                        <Dumbbell className="w-12 h-12 text-dark-500 mx-auto mb-4" />
                        <h3 className="font-display text-xl uppercase text-white tracking-wide">
                            Nothing Here Yet
                        </h3>
                        <p className="mt-2 text-gray-500 text-sm max-w-xs mx-auto">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex mt-6 px-6 py-3 bg-[#C2F800] text-black font-bold uppercase tracking-wide text-sm rounded-lg "
                        >
                            Go to workouts
                        </Link>
                    </div>

                )}

            </div>

        </main>
    );
};

export default MyPlanPage;