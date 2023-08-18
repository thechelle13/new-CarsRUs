import { setWheelId} from "./transientState.js"


const handleWheelChange = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setWheelId(convertedToInteger)
    }
}

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChange)

    let wheelOptionsHTML = "<select id='wheel'>"

    const divStringArray = wheels.map(
        (wheel) => {
        return `<div>
        <option id='wheel' value='${wheel.id}' /> ${wheel.wheel}
    </div>`
        }
    )
    wheelOptionsHTML += divStringArray.join("")
    wheelOptionsHTML += "</select>"
    return wheelOptionsHTML
}



// for (const wheel of wheels) {
//     wheelOptionsHTML += `<div>
//         <option id='wheel' value='${wheel.id}' /> ${wheel.wheel}
//     </div>`
// }
//     wheelOptionsHTML += "</select>"
// return wheelOptionsHTML
// }