const orders = [
    {
        name: 'Lager',
        price: 10
    },
    {
        name: 'SPA',
        price: 15
    }
]

const orderTotal = (arrayOfOrders) => (
    arrayOfOrders.reduce((reduced, item) => 
    reduced + item.price,0
    )
)

console.log(orderTotal(orders))

if (orderTotal(orders) !== 25) {
    throw new Error('Happy path failed!')
}


if (orderTotal([]) !== 0) {
    throw new Error('Empty order list must equals 0 !')
}




