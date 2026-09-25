"use client";

import { Iworkout } from "@/type/type";
import { createContext, ReactNode, useState } from "react";


interface WorkContextType {
    addBtn: Iworkout[];
    setAddBtn: React.Dispatch<React.SetStateAction<Iworkout[]>>;

    saveBtn: Iworkout[];
    setSaveBtn: React.Dispatch<React.SetStateAction<Iworkout[]>>;
}

export const WorkContext = createContext<WorkContextType>({
    addBtn: [],
    setAddBtn: () => { },

    saveBtn: [],
    setSaveBtn: () => { },
});

const WorkProvider = ({ children }: { children: ReactNode }) => {

    const [addBtn, setAddBtn] = useState<Iworkout[]>([]);
    const [saveBtn, setSaveBtn] = useState<Iworkout[]>([]);

    const sharedData = {
        addBtn,
        setAddBtn,
        saveBtn,
        setSaveBtn
    };

    return (
        <WorkContext.Provider value={sharedData}>
            {children}
        </WorkContext.Provider>
    );
};

export default WorkProvider;