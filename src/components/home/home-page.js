import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import '../../stylesheets/home/home'
import { fetchCartItems, clearCartItems } from '../../actions/cart/cart-items-actions'
import ItemListContainer  from '../utils/item-list-container'

@connect( (store) => {
    return{
      cartItems: store.cartItemsReducer.cartItems,
      fetched: store.cartItemsReducer.fetched,
      cartItemsCount: store.cartItemsReducer.cartItemsCount,
      total: store.cartItemsReducer.total
    }
})
export default class HomePage extends Component {
    componentWillMount(){
        this.props.dispatch(clearCartItems())
        this.props.dispatch(fetchCartItems())
    }

    render(){
        var movieListElement = [];
        if(this.props.cartItems.length > 0){
            movieListElement = <ItemListContainer {...this.props} items={this.props.cartItems} />
        }

        return(
            <div className='container-home'>
                <h2 className="page-header">YOUR SHOPPING BAG</h2>
                <div className="row fluid-container cart-header">
                    <div className="col-md-8">
                        <h3> {this.props.cartItemsCount } Items</h3>
                    </div>

                    <div className="col-md-4">
                        <div className="col-md-4">
                            <h3 className="pull-center"> Size</h3>
                        </div>
                        <div className="col-md-4">
                            <h3 className="pull-center"> Qty</h3>
                        </div>
                        <div className="col-md-4">
                            <h3 className="pull-center"> Price </h3>
                        </div>
                    </div>
                </div>
                <div className={"placeholders" +  (this.props.moviesFetched ? '': 'inactive')}>
                    {movieListElement}
                </div>
            </div>
        )
    }
}
