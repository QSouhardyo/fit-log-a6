"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png"
import { WorkContext } from "@/context/WorkProvider";



const Navbar = () => {
    const { addBtn, saveBtn } = useContext(WorkContext)

    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    const isWorkout = pathname === "/" || pathname.startsWith("/workout");
    const isPlan = pathname === "/my-plan";




    return (
        <nav className="sticky top-0 z-50 bg-black border-b border-gray-600">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 shrink-0"
                    >
                        <Image src={Logo} alt="Logo"></Image>

                        <span className="font-display text-xl tracking-wide  uppercase">
                            FitLog
                        </span>
                    </Link>


                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">

                        <Link
                            href="/"
                            className={`text-sm font-medium uppercase tracking-wider transition-colors ${isWorkout
                                ? "text-[#C2F800] border-b-2 border-[#C2F800] pb-0.5"
                                : "text-gray-400 hover:text-[#C2F800]"
                                }`}
                        >
                            Workout
                        </Link>

                        <Link
                            href="/my-plan"
                            className={`text-sm font-medium uppercase tracking-wider transition-colors ${isPlan
                                ? "text-[#C2F800] border-b-2 border-[#C2F800] pb-0.5"
                                : "text-gray-400 hover:text-[#C2F800]"
                                }`}
                        >
                            My Plan
                        </Link>

                    </div>


                    {/* Badges */}
                    <div className="flex items-center gap-3">

                        <Link
                            href="/my-plan"
                            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C2F800] text-black text-xs font-bold uppercase tracking-wide"
                        >
                            Plan

                            <span className="bg-black/20 rounded-full w-5 h-5 flex items-center justify-center text-[11px]">
                                {addBtn.length}
                            </span>
                        </Link>


                        <Link
                            href="/my-plan"
                            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C2F800] text-[#C2F800] text-xs font-bold uppercase tracking-wide hover:bg-[#C2F800] hover:text-black transition-colors"
                        >
                            Saved

                            <span className="bg-black/20 rounded-full w-5 h-5 flex items-center justify-center text-[11px]">
                                {saveBtn.length}
                            </span>
                        </Link>


                        {/* Mobile menu button */}
                        <button
                            className="md:hidden text-[#C2F800] hover:text-white p-1"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            {open ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>

                    </div>

                </div>


                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden pb-4 border-t border-dark-600 pt-3 space-y-3">

                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className={`block text-sm font-medium uppercase tracking-wider ${isWorkout
                                ? "text-[#C2F800]"
                                : "text-gray-400 hover:text-[#C2F800]"
                                }`}
                        >
                            Workout
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setOpen(false)}
                            className={`block text-sm font-medium uppercase tracking-wider ${isPlan
                                ? "text-[#C2F800]"
                                : "text-gray-400 hover:text-[#C2F800]"
                                }`}
                        >
                            My Plan
                        </Link>


                        <div className="flex gap-3 pt-2">

                            <Link
                                href="/my-plan"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C2F800] text-black text-xs font-bold uppercase"
                            >
                                Plan <span>{addBtn.length}</span>
                            </Link>

                            <Link
                                href="/my-plan"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C2F800] text-[#C2F800] text-xs font-bold uppercase hover:bg-[#C2F800] hover:text-black transition-colors"
                            >
                                Saved <span>{saveBtn.length}</span>
                            </Link>

                        </div>

                    </div>
                )}

            </div>

        </nav>
    );
};

export default Navbar;