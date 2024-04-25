const { useContext, createContext, useState } = require("react");

const Progress=createContext();
export const ProgressProvider=({children})=>{
const [progress,setProgress]=useState(30);
return (
    <Progress.Provider value={{progress,setProgress}}>
        {children}
    </Progress.Provider>
)


}
export const useProgress=()=>{
    return useContext(Progress);
}