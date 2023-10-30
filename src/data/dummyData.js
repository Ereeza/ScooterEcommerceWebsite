import logo from "../assets/images/logo.png"
import cart from "../assets/icons/cart.png";
import profile from "../assets/icons/profile.png";
import greenScooter from "../assets/images/green-scooter.jpg";
import metalScooter from "../assets/images/metal-scooter.jpg";
import blueScooter from "../assets/images/blue-scooter.jpg";
import yellowScooter from "../assets/images/yellow-scooter.jpg";
import purpleScooter from "../assets/images/purple-scooter.jpg";
import orangeScooter from "../assets/images/orange-scooter.jpg";
import lightBlueScooter from "../assets/images/lightblue-scooter.jpg";
import redScooter from "../assets/images/red-scooter.jpg";
import whiteScooter from "../assets/images/white-scooter.jpg";
import pinkScooter from "../assets/images/pink-scooter.jpg";
import accessory1 from "../assets/images/accessory1.jpg";
import accessory2 from "../assets/images/accessory2.jpg";
import accessory3 from "../assets/images/accessory3.jpg";
import accessory4 from "../assets/images/accessory4.jpg";
import accessory5 from "../assets/images/accessory5.jpg";
import accessory6 from "../assets/images/accessory6.jpg";
// import stripe from "../assets/images/payment-stripe.png";
// import paypal from "../assets/images/payment-paypal.png";
// import aexpress from "../assets/images/payment-aexpress.png";
// import visa from "../assets/images/payment-visa.png";
// import mastercard from "../assets/images/payment-mastercard.png";









const navData = {
    logo: logo,
    cart: cart,
    profile: profile
}


const products = {
    product: [
        {
            id: 1,
            img: greenScooter,
            title: "Booster Brave F1",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 700,
            onSale: false,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 2,
            img: accessory2,
            title: "Hammer Scooter Lock",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 75,
            onSale: false,
            category: "accessory",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 3,
            img: accessory3,
            title: "MAX3 Scooter Lock",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 90,
            onSale: false,
            category: "accessory",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 4,
            img: yellowScooter,
            title: "Libero X350",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: 875,
            price: 799,
            onSale: true,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 5,
            img: purpleScooter,
            title: "North Booster 1",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 725,
            onSale: false,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 6,
            img: accessory6,
            title: "Unbeatable Lock 100",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: 80,
            price: 69,
            onSale: true,
            category: "accessory",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 7,
            img: lightBlueScooter,
            title: "Practico PRO 500",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 699,
            onSale: false,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 8,
            img: redScooter,
            title: "Practico S2 Exclusive",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: 750,
            price: 600,
            onSale: true,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 9,
            img: whiteScooter,
            title: "Practico Z50 Exclusive",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 750,
            onSale: false,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 10,
            img: accessory1,
            title: "GoodLock J10",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 95,
            onSale: false,
            category: "accessory",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 11,
            img: pinkScooter,
            title: "SilverPath MAX2",
            subtitle: "250 Watt Electric Scooter",
            price: 575,
            onSale: false,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 12,
            img: metalScooter,
            title: "Libero X150",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 750,
            onSale: true,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 13,
            img: blueScooter,
            title: "Libero X250",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 750,
            onSale: false,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },


        {
            id: 14,
            img: accessory4,
            title: "U Lock Force",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: 875,
            price: 99,
            onSale: false,
            category: "accessory",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 15,
            img: accessory5,
            title: "U Lock Force MAX",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: 90,
            price: 75,
            onSale: true,
            category: "accessory",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            id: 16,
            img: orangeScooter,
            title: "North D Booster 2000",
            subtitle: "250 Watt Electric Scooter",
            oldPrice: "",
            price: 870,
            onSale: true,
            category: "scooter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },


    ]
}

const aboutUsData = {
    title: "About us",
    text: "The joy of easy and hassle free travel using electric scooters made us dream about starting this business."
}

const contactData = {
    title: "Contact us",
    text: "If you have any questions, please feel free to get in touch with us, we’ll get back to you shortly.",
}

const footerData = {
    navList: [
        {
            id: 1,
            title: "Shop All"
        },
        {
            id: 2,
            title: "Electric Scooters"
        },
        {
            id: 3,
            title: "Accessories"
        },
        {
            id: 4,
            title: "About"
        },
        {
            id: 5,
            title: "Contact"
        },
    ]
}

// const footerPaymentData = {
//     paymentIcons: [
//         {
//             id: 1,
//             img: stripe
//         },
//         {
//             id: 2,
//             img: paypal
//         },
//         {
//             id: 3,
//             img: aexpress
//         },
//         {
//             id: 4,
//             img: visa
//         },
//         {
//             id: 5,
//             img: mastercard
//         }
//     ]
// }

export {
    navData, products, aboutUsData, contactData, footerData
}