// return promise
// resolves to object that 
// has json property that
// is function that 
// returns an array:
 

const orders = [
    {
        name: 'Lager',
        price: 10
    },
    {
        name: 'APA',
        price: 15
    }
]
//pretend to be a fetch

export const mockedFetch = () => {
    return Promise.resolve({
        json: () => orders
    })
}