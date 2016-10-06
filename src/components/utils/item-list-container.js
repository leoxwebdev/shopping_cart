import React, { Component } from 'react';
import render from 'react-dom';
import { Link } from 'react-router'
import Input from './price_tags'

export default class ItemListContainer extends Component {
    constructor(props) {
      console.log(props)
      super(props);
      this.state = {
         quantity : 0
      }
     }



    render(){
      var itemListElement = [];
      if(this.props.items.length > 0){
          itemListElement = this.props.items.map( (item, index) => {
             return <div key={item.p_id} className="row fluid-container item-container">
                <div className="col-md-8">
                    <div className="col-md-3">
                        <img src={require('../../images/T' + item.p_id + '.png')} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h3 className="list-group-item-heading">{item.p_name ? item.p_name.toUpperCase() : '' }</h3>
                        <h4 className="list-group-item-text">Style #: {item.p_style ? item.p_style : '' } </h4>
                        <h4 className="list-group-item-text">Color: {item.p_variation ? item.p_variation : '' }</h4>
                        <br/><br/>
                        <a href="#" > EDIT </a>|
                        <a href="#" > REMOVE </a> |
                        <a href="#" > SAVE FOR LATER </a>
                     </div>
                </div>

                <div className="col-md-4">
                    <div className="col-md-4">
                        <h3 className="pull-center"> {item.p_selected_size ? item.p_selected_size.code : '' }</h3>
                    </div>
                    <div className="col-md-8">
                        <h3 className="pull-center">
                           <Input item={item.p_quantity} c_currency={item.c_currency} p_price={item.p_price}/>
                         </h3>
                    </div>
                </div>
            </div>
          });
          return(
            <div>{itemListElement}</div>
          )
      }
      return null
    }
}
