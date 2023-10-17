export const Cart = () => {
  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action">Remove all</h5>
        </div>
        <div className="Cart-Items">
          <div className="image-box">
            <img src="images/apple.png" style={{ height: '120px' }} />
          </div>
          <div className="about">
            <h1 className="title">Apple Juice</h1>
            <h3 className="subtitle">250ml</h3>
            <img src="images/veg.png" style={{ height: '30px' }} />
          </div>
          <div className="counter"></div>
          <div className="prices"></div>
        </div>
        <div className="counter">
          <div className="btn">+</div>
          <div className="count">2</div>
          <div className="btn">-</div>
        </div>
        <div className="prices">
          <div className="amount">$2.99</div>
          <div className="save">
            <u>Save for later</u>
          </div>
          <div className="remove">
            <u>Remove</u>
          </div>
        </div>
      </div>
    </div>
  )
}
