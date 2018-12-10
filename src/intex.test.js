import {orderTotal} from './index'

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


test('Happy path failed', ()=>{
    expect(orderTotal(orders)).toBe(25)
})
test('Happy path failed', ()=>{
    expect(
        orderTotal([])
        ).toBe(0)
})
