let carts = document.querySelectorAll('.buy')

let products = [
	{
		name: 'Zerrouki',
		tag: 'zerrouki',
		price: 39,
		inCart: 0
	},
	{
		name: 'Propper',
		tag: 'propper',
		price: 19,
		inCart: 0
	}
];

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
		totalCost(products[i])
	})
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');

	if (productNumbers) {
		document.querySelector('#cartbutton span').textContent = productNumbers;
	}
}

function cartNumbers(card) {

	let productNumbers = localStorage.getItem('cartNumbers');


	productNumbers = parseInt(productNumbers);

	if(productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers +1);
		document.querySelector('#cartbutton span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('#cartbutton span').textContent = 1;
	}
	setItems(card);
}

function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	if(cartItems != null) {
		if(cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1;
	} else {
	product.inCart = 1;
	cartItems = {
		[product.tag]: product
		}
	}	
	localStorage.setItem("productsInCart", JSON.stringify (cartItems));
}

function totalCost(product) {
	//console.log("The product price is", product.price);
	let cartCost = localStorage.getItem('totalCost');
	
	console.log("My cartCost is", cartCost);
	console.log(typeof cartCost);

	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}

}

function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".products");

	console.log(cartItems);
	if ( cartItems && productContainer ) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<div class="product">
				<ion-icon name="close-circle-outline"></ion-icon>
				<img src="${item.tag}.jpg">
				<span>${item.name}</span>
			</div>
			<div class="price">€${item.price},00</div>
			<div class="quantity">
				<ion-icon name="caret-back-outline"></ion-icon>
				<span>${item.inCart}</span>
				<ion-icon name="caret-forward-outline"></ion-icon>
			</div>
			<div class="total">
				€${item.inCart * item.price},00
			</div>
			`
		});
	}
}

onLoadCartNumbers();
displayCart();