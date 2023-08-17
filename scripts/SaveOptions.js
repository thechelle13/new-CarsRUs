import { OrderList } from "./transientState.js"
// Responsibility to provide UI controls for survey taker to choose yes or no for ownership of blue jeans


/*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleSavedOrderClick = (clickEvent) => {
        if (clickEvent.target.id === "saveOrder") {
            
            OrderList()
        }
    }

    // const changeHandler = (changeEvent) => {
    //     if (changeEvent.target.id === "resource") {
    //        const chosenOption = changeEvent.target.value
    //        console.log(parseInt(chosenOption))
    //     }
    //  }

export const SaveOrder = () => {

    document.addEventListener("click", handleSavedOrderClick)
    
    return "<div><button id='saveOrder'>Place Car Order</button></div>"
}