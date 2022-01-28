const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "AIR JORDAN",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZER",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "CRATER",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let selectedProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', (e) => {
        // chage current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change selected product
        selectedProduct = products[index];

        // change text of current product
        currentProductTitle.innerHTML = selectedProduct.title;
        currentProductPrice.innerHTML = `$${selectedProduct.price}`;
        currentProductImg.src = selectedProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = selectedProduct.colors[index].code
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', (e) => {
        currentProductImg.src = selectedProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', (e) => {
        currentProductSizes.forEach((resetSize) => {
            resetSize.style.backgroundColor = "white";
            resetSize.style.color = "black";
        });

        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener('click', () => {
   payment.style.display = "flex";
});

close.addEventListener('click', () => {
    payment.style.display = "none";
});