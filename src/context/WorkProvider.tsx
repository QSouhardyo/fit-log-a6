"use client";

import { Iworkout } from "@/type/type";
import { createContext, ReactNode, useEffect, useState } from "react";


interface WorkContextType {
    addBtn: Iworkout[];
    setAddBtn: React.Dispatch<React.SetStateAction<Iworkout[]>>;

    saveBtn: Iworkout[];
    setSaveBtn: React.Dispatch<React.SetStateAction<Iworkout[]>>;

    isMounted: boolean;
}

export const WorkContext = createContext<WorkContextType>({
    addBtn: [],
    setAddBtn: () => { },

    saveBtn: [],
    setSaveBtn: () => { },
    isMounted: false,
});

const WorkProvider = ({ children }: { children: ReactNode }) => {

    const [addBtn, setAddBtn] = useState<Iworkout[]>([]);
    const [saveBtn, setSaveBtn] = useState<Iworkout[]>([]);

    const [isMounted, setIsMounted] = useState(false);

    // Client-এ mount হওয়ার পর localStorage থেকে পড়ো
    useEffect(() => {
        const getAddItem = localStorage.getItem("work-add");
        if (getAddItem) {
            try {
                setAddBtn(JSON.parse(getAddItem));
            } catch (e) {
                console.error("Failed to parse localStorage", e);
            }
        }
        setIsMounted(true);   // এখন থেকে client-ready
    }, []);

    // শুধু mounted হওয়ার পর write করো (নইলে empty array দিয়ে overwrite হয়ে যাবে)
    useEffect(() => {
        if (!isMounted) return;
        localStorage.setItem("work-add", JSON.stringify(addBtn));
    }, [addBtn, isMounted]);




    const sharedData = {
        addBtn,
        setAddBtn,
        saveBtn,
        setSaveBtn,
        isMounted
    };

    return (
        <WorkContext.Provider value={sharedData}>
            {children}
        </WorkContext.Provider>
    );
};

export default WorkProvider;