'use client'
import { WorkContext } from '@/context/WorkProvider';
import { Iworkout } from '@/type/type';
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const SaveBtn = ({ workout }: { workout: Iworkout }) => {

    const { saveBtn, setSaveBtn } = useContext(WorkContext)

    const handleSaveBtn = () => {

        const allreadyAdded = saveBtn.some(item => item.id === workout.id)

        if (allreadyAdded) {
            toast.warn('Already added!', {
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
            return
        }

        setSaveBtn([...saveBtn, workout])
        toast.success("You have added successfully!", {
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
    }

    return (
        <button
            onClick={handleSaveBtn}
            className="flex gap-1 px-5 py-2.5 cursor-pointer rounded-lg border border-gray-600 text-gray-300 text-sm font-bold uppercase tracking-wide hover:border-[#C2F800] hover:text-[#C2F800] transition"
        >
            <Bookmark className="w-5 h-5" />
            Save for later
        </button>
    );
};

export default SaveBtn;