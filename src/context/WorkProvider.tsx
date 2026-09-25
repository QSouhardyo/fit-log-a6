'use client'
import { createContext, useState } from "react";

export const WorkContext = createContext({})



const WorkProvider = ({ children }) => {

    const [addBtn, setAddBtn] = useState([])
    const [saveBtn, setSaveBtn] = useState([])



    const sharedData = {
        addBtn, setAddBtn, saveBtn, setSaveBtn
    }
    return <WorkContext.Provider value={sharedData}>
        {children}
    </WorkContext.Provider>
};

export default WorkProvider;

