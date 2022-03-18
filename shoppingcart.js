let carts = document.querySelectorAll('.buy')

let products = [
	{
		name: 'Senior 21/22 Thuis Shirt',
		tag: 'thuisshirt',
		price: 39,
		incart: 0
	},
	{
		name: 'Anders',
		tag: 'anders',
		price: 39,
		incart: 0
	}
];

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers();
	})
}

function cartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');


	productNumbers = parseInt(productNumbers);

	if(productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers +1);
		document.querySelector('#cartbutton span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('#cartbutton span').textContent = 1;
	}

}