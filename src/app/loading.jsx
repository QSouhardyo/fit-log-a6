import React from 'react';
import { Dumbbell } from 'lucide-react';

const GlobalLoading = () => {
    return (
        <div className="min-h-screen bg-dark-900 flex items-center justify-center">

            <div className="text-center">

                <div className="flex justify-center">
                    <Dumbbell className="w-12 h-12 text-[#C2F800] animate-pulse" />
                </div>

                <p className="mt-4 text-sm text-gray-400">
                    Loading workout...
                </p>

            </div>

        </div>
    );
};

export default GlobalLoading;