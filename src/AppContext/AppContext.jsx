import { useReducer, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext(
    {
        docArr: [],
        dispatchDocArr : ()=>{},
    }
);

const initialState = JSON.parse(localStorage.getItem('docState')) || [];

const docReducer = (state, action)=>{
    switch (action.type) {
        case "add":
            const newState = [...state, action.doc];
            localStorage.setItem('docState', JSON.stringify(newState));
            return newState;

        case "delete":
            const newArr = state.filter((doc)=> doc.id != action.id);
            localStorage.setItem('docState', JSON.stringify(newArr));
            return newArr;
        
        case "update":
            const updatedState = state.map(doc => {
                if (doc.id == action.newDoc.id) {
                    return action.newDoc;
                }
                return doc;
            });

            localStorage.setItem('docState', JSON.stringify(updatedState));
            return updatedState;

        default:
          return state;
      }
};

const AppContextProvider = (props)=>{
    const [docArr, dispatchDocArr] = useReducer(docReducer, initialState);
    return(
        <AppContext.Provider value={{docArr, dispatchDocArr}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;