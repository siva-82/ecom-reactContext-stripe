// Flute price_1P3tYeSFTsYvjEqCNgnuWkcJ 
// keyboard price_1P3taoSFTsYvjEqCJXWWmK32
// guitar price_1P3taCSFTsYvjEqCuZH0e1s4

const productsArray=[
    {
        id:"price_1P3tYeSFTsYvjEqCNgnuWkcJ",
        title:"Flute",
        price:1000
    },
    {
        id:"price_1P3taoSFTsYvjEqCJXWWmK32",
        title:"Guitar",
        price:5000
    },    {
        id:"price_1P3taCSFTsYvjEqCuZH0e1s4",
        title:"keyboard",
        price:1000
    },
]

function getProductData(id){
let productData=productsArray.find(product=>product.id === id)

if(productData=== undefined){
    console.log("Product data does not exist for ID:" +id)
}
return productData;
}

export {productsArray,getProductData}