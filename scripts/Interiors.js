import { setInteriorId } from "./transientState.js"


const handleInteriorChange = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setInteriorId(convertedToInteger)
    }
}

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChange)

    let interiorOptionsHTML = "<select id='interior'>"
    const divStringArray = interiors.map(
        (interior) => {
          return `<div>
              <option id='interior' value='${interior.id}' /> ${interior.interior}
          </div>`
        }
    )
    interiorOptionsHTML += divStringArray.join("")
    interiorOptionsHTML += "</select>"
    return interiorOptionsHTML
}