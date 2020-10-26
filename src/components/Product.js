import React from 'react'
import Header from './Header'
import products from '../sources/products'

const Product = (props) => {
    let i = 0
    while (products[i].label != props.name || i >= products.length) {
        i++
    }
    const product = products[i]
    return (
        <div>
            <Header />
            <h1>{props.name}</h1>
            <div className="ProductTitle">
                <p className="productInfo">{product.info}</p>
                <img src={product.imgPath} className="productImage"/>
            </div>
            <p>products: *slide show*</p>
        </div>
    )


}

export const Antivirus = () => (
    <Product name="Antivirus" />
)

export const Firewall = () => (
    <Product name="Firewall" />
)

export const MobileSecurity = () => (
    <Product name="Mobile Security" />
)

export const NetworkSecurity = () => (
    <Product name="Network Security" />
)

export const CloudSecurity = () => (
    <Product name="Cloud Security" />
)