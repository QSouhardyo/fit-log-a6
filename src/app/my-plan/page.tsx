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

    const handleRemove = (id) => {
        const remove = addBtn.filter((item) => item.id !== id);

        setAddBtn(remove);

    };

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

                                                {/* DELETE */}

                                                <button
                                                    onClick={() =>
                                                        handleRemove(workout.id)
                                                    }
                                                    className="p-2.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition"
                                                    aria-label="Remove workout"
                                                >

                                                    <Trash2 className="w-5 h-5" />

                                                </button>


                                                {/* ADD TO PLAN */}

                                                <button
                                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C2F800] text-black text-xs font-bold uppercase tracking-wide hover:bg-[#C2F800]/90 transition"
                                                >

                                                    <CalendarPlus2 className="w-4 h-4" />

                                                    Add to Plan

                                                </button>


                                                {/* SAVE */}

                                                <button
                                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-600 text-gray-300 text-xs font-bold uppercase tracking-wide hover:border-[#C2F800] hover:text-[#C2F800] transition"
                                                >

                                                    <Bookmark className="w-4 h-4" />

                                                    Save

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

                        ))}

                    </div>

                )}


                {/* ================= SAVED ================= */}

                {activeTab === "saved" && (

                    <div className="mt-6">

                        {saveBtn && saveBtn.length > 0 ? (

                            <div className="space-y-4">

                                {sortedWorkouts2.map((workout) => (

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

                                                        {/* DELETE */}

                                                        <button
                                                            onClick={() =>
                                                                handleRemove2(workout.id)
                                                            }
                                                            className="p-2.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition"
                                                            aria-label="Remove workout"
                                                        >

                                                            <Trash2 className="w-5 h-5" />

                                                        </button>


                                                        {/* ADD TO PLAN */}

                                                        <button
                                                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C2F800] text-black text-xs font-bold uppercase tracking-wide hover:bg-[#C2F800]/90 transition"
                                                        >

                                                            <CalendarPlus2 className="w-4 h-4" />

                                                            Add to Plan

                                                        </button>


                                                        {/* SAVE */}

                                                        <button
                                                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-600 text-gray-300 text-xs font-bold uppercase tracking-wide hover:border-[#C2F800] hover:text-[#C2F800] transition"
                                                        >

                                                            <Bookmark className="w-4 h-4" />

                                                            Save

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