import React from "react";

export default React.createContext({
    questionTree:[],
    setContentData:()=>{},
    changeBlockForQuestion:()=>{},
    addExerciseBlock:()=>{},
    editExerciseBlock:()=>{},
    delExerciseBlock:()=>{},
    addQuestion:()=>{},
    editQuestion:()=>{},
    delQuestion:()=>{},
    getAnswers:()=>{},
    addAnswer:()=>{},
    editAnswer:()=>{},
    delAnswer:()=>{}
});