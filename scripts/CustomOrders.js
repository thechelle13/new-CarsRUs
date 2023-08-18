// export const OrderDetailsList = async () => {
//     // Get the submissions from your API
//     const response = await fetch ("http://localhost:8088/customOrders?_expand=wheel&_expand=paint&_expand=interior&_expand=technology")
//     //const response = await fetch ("http://localhost:8088/customOrders")
//     const orders = await response.json()

//     let orderHTML = ""
    
//     for (const order of orders) {
    
//         const wheelPrice = order.wheel && order.wheel.price ? parseFloat(order.wheel.price) : 0

//         const interiorPrice = order.interior && order.interior.price ? parseFloat(order.interior.price) : 0
//         const paintPrice = order.paint && order.paint.price ? parseFloat(order.paint.price) : 0
//         const techPrice = order.technology && order.technology.price ? parseFloat(order.technology.price) : 0

//         const orderPrice = wheelPrice + paintPrice + interiorPrice + techPrice

//         const costString = orderPrice.toLocaleString("en-US", {
//             style: "currency",
//             currency: "USD"
//         })
//         debugger
//         orderHTML += `<section class="order">
//             <div> Details:</div>
//             <div>Order #${order.id} ${order.paint.paint} car with ${order.wheel.wheel}, ${order.interior.interior}, and ${order.technology.technology} for a total cost of ${costString}</div>
            
        
//         </section>
//         `
//     }
//     return orderHTML
// }


export const OrderDetailsList = async () => {
    const response = await fetch ("http://localhost:8088/customOrders?_expand=wheel&_expand=paint&_expand=interior&_expand=technology")
    const orders = await response.json()
    
    
    const orderHTML = orders.map( (orders) => {
        const orderPrice = orders.wheel.price + orders.paint.price + orders.technology.price + orders.interior.price
        const costString = orderPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    return `<section class="order">
                <div> Details:</div>
                <div>Order #${orders.id} ${orders.paint.paint} car with ${orders.wheel.wheel}, ${orders.interior.interior}, and ${orders.technology.technology} for a total cost of ${costString}</div>
                
            </section>
            `
    }
    )
    const finalCost = orderHTML.join("")
    return finalCost
}

