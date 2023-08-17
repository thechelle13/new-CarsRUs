const transientState = {
    wheelId : 0, 
    paintId : 0, 
    interiorId : 0,
    technologyId : 0
}

export const setWheelId = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}
export const setInteriorId = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}
export const setPaintId = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}
export const setTechnologyId = (chosenTech) => {
    transientState.technologyId = chosenTech
    console.log(transientState)
}

export const OrderList = async () => {
    const postOrders = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch ("http://localhost:8088/customOrders", postOrders)

    const customEvent = new CustomEvent("newOrderCreated", response)

    document.dispatchEvent(customEvent)
}