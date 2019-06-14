let _ = require('./lodash')
// // create array than extract uniques than sum it
//
// let array = [1,2,2,3,4,5,6,6,7,8,9,9,9,1]
// let unique = _.uniq(array)
// console.log('unique', unique);
//
// let sum = _.sum(unique)
// console.log('sum', sum);

//Array of objects


// calculate total price of all products


// create a collection of poducts
products = [{
	name: 'shoes',
	price: 27,
	isbn: 1
},{
	name: 'apple',
	price: 3,
	isbn: 2
},{
	name: 'baguette',
	price: 70,
	isbn: 1
},{
	name: 'nachos',
	price: 7,
	isbn: 4
},{
	name: 'clothes',
	price: 100,
	isbn: 5
},{
	name: 'chalk',
	price: 10,
	isbn: 5
}]


// order products by price

let order = _.orderBy(products, (e) => {
	return e.price
})

console.log('order', order);

//extract unique products by code

let unique = _.uniqBy(products, 'isbn')

console.log('unique', unique);

// add tax 10% to each product

let add10 = _.map(unique, (e) => {
	return e.price * 1.10
})

console.log('Price with Tax', add10);

// calculate total price of all products

let total = _.sumBy(add10)

let total_floor = _.floor(total)
console.log('You have to pay', total_floor);
