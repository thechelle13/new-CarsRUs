export const OrderDetailsList = async () => {
    // Get the submissions from your API
    const response = await fetch ("http://localhost:8088/customOrders?_expand=wheel&_expand=paint&_expand=interior&_expand=technology")
    //const response = await fetch ("http://localhost:8088/customOrders")
    const customOrders = await response.json()

    let orderHTML = ""
    
    for (const order of customOrders) {
        
        const wheelPrice = order.wheel && order.wheel.price ? parseFloat(order.wheel.price) : 0
        const interiorPrice = order.interior && order.interior.price ? parseFloat(order.interior.price) : 0
        const paintPrice = order.paint && order.paint.price ? parseFloat(order.paint.price) : 0
        const techPrice = order.technology && order.technology.price ? parseFloat(order.technology.price) : 0

        const orderPrice = wheelPrice + paintPrice + interiorPrice + techPrice

        const costString = orderPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        orderHTML += `<section class="order">
            <div> Details:</div>
            <div>Order #${order.id} ${order.paint} car with ${order.wheel}, ${order.interior}, and ${order.technology} for a total cost of ${costString}</div>
            
        
        </section>
        `
    }
    return orderHTML
}

// export const OrderDetailsList = async () => {
//     const response = await fetch ("http://localhost:8088/orders")
//     const orders = await response.json()
    
    
//     const orderHTML = orders.map( (order) => {
//         const orderPrice = order.metal.price + order.size.price + order.style.price
//         const costString = orderPrice.toLocaleString("en-US", {
//             style: "currency",
//             currency: "USD"
//         })
//     return `<section class="order">
//             <div> Order Details:</div>
//             <div>Order #${order.id} cost ${costString}</div>
//         <div> Metal Choice: #${order.metals}
//         </div>
//         <div> Size Choice: #${order.sizes}
//         </div>
//         <div> Style Choice: #${order.styles}
//         </div>
//         </section>
//         `
//     }
//     )
//     const finalCost = orderHTML.join("")
//     return finalCost
// }