import { WheelOptions } from "./Wheels.js"
import { PaintOptions } from "./Paints.js"
import { InteriorOptions } from "./Interiors.js"
import { TechOptions } from "./Technologies.js"
import { OrderDetailsList } from "./CustomOrders.js"
import { SaveOrder } from "./SaveOptions.js"



const render = async () => {
    const wheelOptionsHTML = await WheelOptions()
    const paintOptionsHTML = await PaintOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const techOptionsHTML = await TechOptions()
    const buttonHTML = await OrderDetailsList()
    const newOrdersHTML = await SaveOrder()

    const container = document.querySelector("#container")

    const composedHTML = `
        <h1 class="title">Cars 'R Us</h1>

        <article class="choices">
            <section class="choices__wheels options">
                <h2>Wheel Sizes</h2>
                ${wheelOptionsHTML}
            </section>

            <section class="choices__paints options">
                <h2>Paint Choices</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices__interiors options">
                <h2>Interior Options</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices__technologies options">
                <h2>Tech Packages</h2>
                ${techOptionsHTML}
            </section>
        </article>

        <article class="orderButton">
               ${newOrdersHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${buttonHTML}
        </article>
    `

    container.innerHTML = composedHTML
   
}
// listen for stateChange here
document.addEventListener("newOrderCreated", render)
render ()