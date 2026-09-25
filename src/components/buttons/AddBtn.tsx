'use client'
import { WorkContext } from '@/context/WorkProvider';
import { CalendarPlus2 } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { Bounce, toast } from 'react-toastify';


const AddBtn = ({ workout }) => {

    const { addBtn, setAddBtn } = useContext(WorkContext)
    // const [clicked, setClicked] = useState(false);



    const handleAddBtn = () => {
        // if (clicked) {
        //     alert("Already added!");
        //     return;
        // }
        const allreadyAdded = addBtn.some(item => item.id == workout.id)

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

        setAddBtn([...addBtn, workout])
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
        // setClicked(true);



    }

    return (
        <button
            onClick={handleAddBtn}
            className="flex gap-1 px-5 py-2.5 rounded-lg bg-[#C2F800]  cursor-pointer text-black text-sm font-bold uppercase tracking-wide hover:bg-[#C2F800]/90 transition"
        >
            <CalendarPlus2 className="w-5 h-5" />
            Add to today&apos;s plan
        </button>
    );
};

export default AddBtn;