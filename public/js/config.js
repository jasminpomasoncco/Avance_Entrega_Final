
loadFirstData()

function addDataToDiv(products){
    const listproducts = document.getElementById('listproducts');
    listproducts.innerHTML += `
    <div class="col" >
    <div class="card" style="width: 18rem;">
    <img src="${products.thumbnail}" class="card-img-top">
    <div class="card-body" >
    <h5 class="card-title">${products.title}</h5>
    <p class="card-text">${products.description}</p>
        <h3> S/.${products.price}</h3>
        <hr>
    <a href="" id="agregar${products.id}" class="btn btn-primary">Añadir al carrito</a> 
    </div>
</div>
<br>
</div>
`;

}