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

const orderTotal = (arrayOfOrders) => {
    return arrayOfOrders.reduce((reduced, item, index, array) => {
        return reduced + item.price
    },
    0)
}
console.log(orderTotal(orders))

if(orderTotal(orders)!==25)
{
throw new Error('Simple sum failed')
}


if(orderTotal([])!==0)
{
throw new Error('Simple sum failed')
}




