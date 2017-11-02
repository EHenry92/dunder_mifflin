import React from 'react'
import { connect } from 'react-redux'
import {pushPurchase} from '../store'
import {Link} from 'react-router-dom'

const Products = (props) => {
    const products = props.products
    const handleClick = props.handleClick

    return (
      <div className = "product-container">
        <ul className = "product-list">
        {
          products.map(product =>
            (<li key={product.id}>
                <div className="product-name">
                <Link to={`products/${product.id}`}> { product.title } </Link>
                </div>
                <div className="product-description">
                 {product.description}
                </div>
                <div className="product-photos">
                 <img className="product-photos-1" src={product.photos[0]} /> <img className="product-photos-2" src={product.photos[1]} />
                </div>
                <button className="products-add" onClick={handleClick} value={product.id} >
                +
                </button>
            </li>)
          )
        }
        </ul>
      </div>
    )
}

const mapStateToProps = ({products}) => ({products})

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(evt){
      evt.preventDefault()
      dispatch(pushPurchase(evt.target.value))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products)
