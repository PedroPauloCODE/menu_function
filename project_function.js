const products = [

{ name: 'X-Salada', price: 7, vegan: false, src: './Assets/xsalada.jpeg' },

{ name: 'X-Bacon', price: 8, vegan: false, src: './Assets/xbacon.png' },

{ name: 'X-Bacon Egg', price: 9, vegan: false, src: './Assets/bacon-egg.png' },

{ name: 'Monstruoso', price: 12, vegan: false, src: './Assets/monstruoso.png' },

{ name: 'Big Vegano', price: 15, vegan: true, src: './Assets/xvegan.png' },

{ name: 'X-Vegan', price: 9, vegan: true, src: './Assets/monstruoso-vegan.png' },

]

let listAll = '' 


// Thats my "Printer", i can use this for others function too.


function showAll(array) {
    listAll = ''

    array.forEach(function (value) {

        listAll += `
        <div>
            <img id="img_xsalada" src=${value.src}>

            <h3 id="X-Salada">${value.name}</h3>
            <p id="price_xsalada">${formatarMoeda(value.price)}</p>

        </div>
`
    })

    cardapio.innerHTML = listAll

}


// Discount Zone // I keep my array, and change olny a colun that i want.


function discount(desc) {
    const discountX = products.map(value => {

        return {

            ...value,
            price: value.price * (1 - (desc / 100)),

        }
    })

    showAll(discountX);

}


// Total // This reduct the array in one colunm and sum all itens.


function total() {
const total = products.reduce((acc,  value) => {

     return acc + value.price

}, 0)

cardapio.innerHTML = `The total is ${formatarMoeda(total)}`

}


// Filter // I use one condition to any colunm that i chosse to do a verification.


function only_vegan() {

    const vegan = products.filter(item => {

        if (item.vegan == true) {
            return true
        } else {
            return false
        }
    })

    showAll(vegan)

}

// Leave my value in monetary form


function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD',
    }).format(valor);
}
    



