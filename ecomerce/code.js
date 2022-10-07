const clothing = [
    {
        id: 1,
        name: "Sudadera",
        price: 1000,
        stock: 10,
        pricetotal: 1000,
        img: "./img/featured1.png",
    },
    {
        id: 2,
        name: "camisa",
        price: 800,
        stock: 10,
        pricetotal: 800,
        img: "./img/featured2.png",
    },
    {
        id: 3,
        name: "Sudadera",
        price: 1000,
        stock: 10,
        pricetotal: 1000,
        img: "./img/featured3.png",
    },
];

document.addEventListener("DOMContentLoaded", function(){
    CarritoDEropa();
})

function CarritoDEropa(){
    const armario = document.querySelector(".inventario");
    const itearacarrito = document.querySelector(".menu-carrito");

    let agregando = {};

    itearacarrito.addEventListener("click",(evento) =>{
                        if (evento.target.classList.contains("mas")) {
                            const idobjeto = parseInt(evento.target.parentElement.id)
                            agregando[idobjeto].cantidad++
                            agregando[idobjeto].pricetotal += agregando[idobjeto].pricetotal
                            console.log("es mas")
                        }
                        if (evento.target.classList.contains("menos")) {
                            const idobjeto = parseInt(evento.target.parentElement.id)
                            agregando[idobjeto].cantidad--
                            agregando[idobjeto].pricetotal = agregando[idobjeto].pricetotal - agregando[idobjeto].price
                            console.log("es menos")
                        }
                        if (evento.target.classList.contains("eliminar")) {
                            const idobjeto = parseInt(evento.target.parentElement.id)
                            delete agregando[idobjeto]
                            console.log("es eliminar")
                        }
        funcion2()                
    })
    armario.addEventListener("click", function (event){
        console.log("le diste a armario");
        let aux = event.target.classList.contains("btn");
        if (aux) {
            const id = event.target.getAttribute('id')
            const [filtrado] = clothing.filter((n) => n.id == id)
            if (agregando[id]) {
                if (agregando[id].cantidad <agregando[id].stock) {
                    agregando[id].cantidad++
                }else{
                    alert("se termino el producto")
                }
        }else{
            agregando[id] = filtrado
            agregando[id].cantidad = 1
        }
        funcion2()
        console.log(agregando)
 
        itearacarrito.innerHTML = html2;
        }
        
    })
    
    function funcion1(){
            let html = "";
    clothing.forEach(element => {
        html += `<div class="ropa">
        <div class="ropa-imagen">
            <img src=${element.img} alt="${element.name}">
        </div>
        <h3 class="texto">
            <font class="precio">US$${element.price}</font>
            <span class="stock" >|Stock: ${element.stock}</span>
        </h3>
        <h3 class="name">${element.name}</h3>
        <button class="btn" id="${element.id}">Agregar</button>
        </div>`
    });
    
    armario.innerHTML = html;
    }       

    function funcion2(){
        const agregandoarray = Object.values(agregando)
        let html2 = ``
        agregandoarray.forEach((element) =>{ 
            html2 += `
            <div class="ropa2">
            <div class="ropa-imagen2">
                <img src=${element.img} alt="${element.name}">
             </div>
            <h3 class="texto">
                <b>${element.name}</b>
                <span class="stock" >Stock:10|<font class="precio">${element.price}</font> </span>
                <font class="precio">Subtotal: $${element.pricetotal}</font>
                <span class="stock" >${element.cantidad} unidades </span>
                <div class="actions " id="${element.id}">
                <span class="menos">-</span><b>${element.cantidad}</b><span class="mas">+</span><span class="eliminar">        X</span>
                </div>
            </h3>
                
            </div>
            `
        })
            itearacarrito.innerHTML = html2;
    }    

    funcion1()

    }