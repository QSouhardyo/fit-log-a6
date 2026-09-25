import BannerImg from "@/assets/banner.png"
import Image from "next/image"

import React from 'react';

const Banner = () => {
    return (
        <section className=" max-w-[300px] md:max-w-[700px] lg:max-w-7xl  mx-auto my-10 rounded-3xl overflow-hidden bg-[#222630]">
            <div className="  px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4 ">
                    {/* Text */}
                    <div >
                        <p className=" text-[#C2F800]  font-bold  mb-4">
                            WORKOUT LIBRARY
                        </p>
                        <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
                            TRAIN WITH INTENT. LOG
                            <br /> EVERY SET.

                        </h1>
                        <p className="mt-5 text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>
                        <button

                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#C2F800]  cursor-pointer text-black font-bold  text-sm rounded-lg "
                        >
                            Browse Workouts

                        </button>
                    </div>

                    {/* Image */}



                    <div >
                        <Image src={BannerImg} alt="Banner" height={600} width={400}></Image>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default Banner;
