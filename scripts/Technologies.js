import { setTechnologyId } from "./transientState.js"

const handleTechChange = (changeEvent) => {
    if (changeEvent.target.name === "technology") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setTechnologyId(convertedToInteger)
    }
}


export const TechOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    document.addEventListener("change", handleTechChange)

    let techOptionsHTML = "<select id='technology'>"
    const divStringArray = technologies.map(
        (technology) => {
          return `<div>
              <option type='radio' name='technology' value='${technology.id}' /> ${technology.technology}
          </div>`
        }
    )
    techOptionsHTML += divStringArray.join("")
    techOptionsHTML += "</select>"
    return techOptionsHTML
}

// export const Technologies = () => {
//     // Get data first

//     let html = "<h2>Technologies</h2>"

//     html += '<select id="tech">'
//     html += '<option value="0">Select a technology package</option>'

//     for (const tech of techs) {
//         html += `<option value="${tech.id}">${tech.package}</option>`
//     }

//     html += "</select>"
//     return html
// }

// export const Technologies = () => {
//     let html = "<h2>Technologies</h2>"

//     html += '<select id="tech">'
//     html += '<option value="0">Select a technology package</option>'

//     const arrayOfOptions = techs.map( (tech) => {
//             return `<option value="${tech.id}">${tech.package}</option>`
//         }
//     )

//     html += arrayOfOptions.join("")
//     html += "</select>"
//     return html
// }