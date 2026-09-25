import { Dumbbell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png"



const Footer = () => {
    return (
        <footer className="bg-dark-900 border-t border-gray-600 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center gap-2 shrink-0">
                            <Image src={Logo} alt="Logo"></Image>
                        </div>
                        <span className="font-display text-lg tracking-wide text-white uppercase">
                            FitLog
                        </span>
                    </Link>
                    <p className="text-sm text-gray-500 text-center sm:text-right">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
