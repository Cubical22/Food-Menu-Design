const orders = [
    {name: "Peperoni", prize: 10},
    {name: "Meat", prize: 7},
    {name: "Mixed", prize: 15},
    {name: "Salad", prize: 3},
    {name: "Sezar", prize: 5},
    {name: "Burger", prize: 13},
    {name: "Shells", prize: 8},
];

const list = document.getElementById("order-list");

const orderElements = [];

function addOrdersToList() {
    orders.forEach((order,index)=>{
        const orderElement = document.createElement("div");
        orderElement.classList.add("order");
        orderElement.setAttribute("floatingImageLink", order.name);
        orderElement.innerHTML = `
            <h3 class="order-name">${order.name}</h3>
            <div class="order-ordering-side">
                <p class="order-prize">${order.prize}$</p>
                <button aria-describedby="view button" title="view button" 
                onclick="updateImageByViewButton(${index})" 
                type="button" class="order-view-button">
                <img src="/assets/eye-off.svg" alt="" class="off-image">
                <img src="/assets/eye-on.svg" alt="" style="display: none;" class="on-image">
                </button>
                <button type="button" title="add to orders" class="order-add-button">+</button>
            </div>
        `;

        list.appendChild(orderElement);
        orderElements.push(orderElement);
    });
} addOrdersToList();

let lastIndexSelected;
const floatingImage = document.querySelector('.floating-pizza-img');

function updateImageByViewButton(index) {
    // this section simply is just used to update the display on the button (not the floating image)
    if (lastIndexSelected !== undefined) {
        const onImage = orderElements[lastIndexSelected].querySelector(".on-image");
        const offImage = orderElements[lastIndexSelected].querySelector(".off-image");
        onImage.style.display = "none";
        offImage.style.display = "inline";
    }

    lastIndexSelected = index;
    const onImage = orderElements[lastIndexSelected].querySelector(".on-image");
    const offImage = orderElements[lastIndexSelected].querySelector(".off-image");

    onImage.style.display = "inline";
    offImage.style.display = "none";

    // updating the source of the the image based on the option selected. more improvements will be done lator
    // including a movement animation

    floatingImage.classList.add("hide");
    setTimeout(()=>{
        floatingImage.classList.remove("hide");
        floatingImage.setAttribute("src",
        `/assets/food/${orderElements[lastIndexSelected].getAttribute("floatingImageLink")}.png`);
    },1000);
    
}

// making sure the first index is always on view by default
updateImageByViewButton(0);