import React, { Component } from 'react';
import render from 'react-dom';

export default class Input extends Component {
    constructor(props) {
      super(props);
      console.log(props)
       this.state = {
         quantity : props.item,
         price: (props.item * props.p_price)
      }
    }

    componentWillMount(){
        this.props.dispatch({type: "ADD_CART_ITEM_TOTAL", payload: this.state.price })
    }

    handleOnChange(value, event){
      var price = event.target.value > 0 ? event.target.value * this.props.p_price : 0
      var quantity = event.target.value > 0 ? event.target.value : 0
      if(quantity && this.state.quantity < quantity){
          this.props.dispatch({type: "TOTAL_NO_OF_CART_ITEM_TOTAL", payload: (this.props.cartItemsCount + 1)})
          this.props.dispatch({type: "ADD_CART_ITEM_TOTAL", payload: this.props.p_price })
      }
      if((event.target.value >= 0) && this.state.quantity >= event.target.value){
        this.props.dispatch({type: "TOTAL_NO_OF_CART_ITEM_TOTAL", payload: (this.props.cartItemsCount - 1)})
        this.props.dispatch({type: "DEDUCT_CART_ITEM_TOTAL", payload: this.props.p_price })
      }
      this.setState({
          quantity : quantity,
          price: price
       })

    }


    render(){
      var inputElement= null;
      if(this.props.item){
          inputElement = <div className="row" >
              <div className="col-md-6">
              <h3 className="pull-center no-margin">
                <input className="qty" type="number" value={this.state.quantity} onChange={this.handleOnChange.bind(this, this.value)}/>
              </h3>
              </div>
              <div className="col-md-6">
              <h3 className="pull-center no-margin"> {this.props.c_currency ? this.props.c_currency : '' } {this.state.price ? this.state.price : '0' } </h3>
              </div>
          </div>
          return(
            <div>{inputElement}</div>
          )
      }
      return null
    }
}
