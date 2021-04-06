import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-add-to-cart--icon-design-png-image_1012561.jpg" alt="add to cart"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.macrumors.com/article-new/2017/09/iphonexdesign-800x669.jpg" alt="item"/>
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span><br/>
                    <span>Price: $5200.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
