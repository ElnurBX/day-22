const addBasket = document.getElementsByClassName("addBasket");
const cardTitle = document.getElementsByClassName("card-title");
const cardText = document.getElementsByClassName("card-text");
const cardImgTop = document.getElementsByClassName("card-img-top");
const basketTable = document.getElementById("basketTable");
const staticId = document.getElementsByClassName("staticId");
const basketLength = document.getElementsByClassName("basketLength");
let basket = JSON.parse(localStorage.getItem("basket")) || [];

function renderUi(basketList) {
    if (basketTable) {
        let bas = "";
        for (let i = 0; i < basketList.length; i++) {
            bas += `
                <tr>
                    <th scope="row">${i}</th>
                    <td>${basketList[i].name}</td>
                    <td>${basketList[i].discreet}</td>
                    <td><img width="300" height="100" src="${basketList[i].img}" class="card-img-top" alt="..."></td>
                    <td>${basketList[i].count}</td>
                </tr>
            `;
        }
        basketTable.innerHTML = bas;
    }
}

for (let i = 0; i < addBasket.length; i++) {
    addBasket[i].addEventListener('click', (e) => {
        e.preventDefault();
        let id = staticId[i].textContent;
        let name = cardTitle[i].textContent;
        let discreet = cardText[i].textContent;
        let img = cardImgTop[i].getAttribute("src");

        let existingProduct = basket.find((pro) => pro.id === id);
        if (existingProduct) {
            existingProduct.count++;
        } else {
            basket.push({
                id: id,
                name: name,
                discreet: discreet,
                img: img,
                count: 1
            });
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        renderUi(basket);
        rbl()
    });
}

function rbl(){
    for (let i = 0; i < basketLength.length; i++) {
        basketLength[i].innerHTML=basket.length
        
        
    }
}
rbl()
renderUi(basket);
