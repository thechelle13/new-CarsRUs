import { setWheelId} from "./transientState.js"


const handleWheelChange = (changeEvent) => {
    if (changeEvent.target.name === "wheel") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setWheelId(convertedToInteger)
    }
}

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChange)

    let wheelOptionsHTML = "<select id='wheels'>"

    for (const wheel of wheels) {
        wheelOptionsHTML += `<div>
            <option type='radio' name='wheel' value='${wheel.id}' /> ${wheel.wheel}
        </div>`
    }
        wheelOptionsHTML += "</select>"
    return wheelOptionsHTML
}