import { setPaintId} from "./transientState.js"


const handlePaintChange = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setPaintId(convertedToInteger)
    }
}

export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    document.addEventListener("change", handlePaintChange)

    let paintOptionsHTML = "<select id='paint'>"

    const divStringArray = paints.map(
        (paint) => {
           
          return `<div>
              <option id='paint' value='${paint.id}' /> ${paint.paint}
          </div>`
        }
    )
    
    paintOptionsHTML += divStringArray.join("")
    paintOptionsHTML += "</select>"
    return paintOptionsHTML
}