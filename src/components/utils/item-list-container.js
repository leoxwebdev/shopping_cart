import React, { Component } from 'react';
import render from 'react-dom';
import { Link } from 'react-router'
import Input from './price_tags'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

export default class ItemListContainer extends Component {

    state = {
      isShowingModal: false,
    }

    handleClick = () => this.setState({isShowingModal: true})
    handleClose = () => this.setState({isShowingModal: false})

    render(){
      var itemListElement = [];
      if(this.props.items.length > 0){
            var total = 0;
           itemListElement = this.props.items.map( (item, index) => {
            total += item.p_price
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
                        <a onClick={this.handleClick}> <span>EDIT </span>
                          {
                            this.state.isShowingModal &&
                            <ModalContainer onClose={this.handleClose}>
                              {
                                <ModalDialog onClose={this.handleClose}>
                                  <h1>Dialog Content</h1>
                                  <p>More Content. Anything goes here</p>
                                </ModalDialog>
                              }
                            </ModalContainer>
                          }
                        </a>|
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
                           <Input {...this.props} item={item.p_quantity} c_currency={item.c_currency} p_price={item.p_price} />
                         </h3>
                    </div>
                </div>

            </div>
          });
           return(
            <div>
            <div>{itemListElement}</div>
            <div className="container-fluid">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <span> Enter Promotion Code or GiftCard &nbsp; &nbsp;</span>
                    <span> <input type="text" value="" />  &nbsp; &nbsp;</span>
                    <span> <button className="btn btn-success" value="Apply">Apply</button> </span>
                </div>
            </div>
            <hr/>
            <div className="container-fluid">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                <div className="col-md-8">
                  <h3>Sub Total</h3>
                  <h3>Promotion Code </h3>
                  <h3>Estimated Shipping </h3>
                </div>
                      <div className="col-md-4 right-align">
                        <h3 className="">{this.props.total}</h3>
                        <h3 className="">0</h3>
                        <h3 className="">Free</h3>
                      </div>

                </div>
            </div>
            <hr/>
            <div className="container-fluid">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                <div className="col-md-8">

                  <h3>Estimated Total </h3>
                </div>
                      <div className="col-md-4 right-align">
                        <h3 className="">{this.props.total}</h3>

                      </div>

                </div>
            </div>
            <hr/>
            <div className="pull-right">
                <button className="btn btn-primary"> Checkout </button>
                <hr/>
            </div>
          </div>
          )
      }
      return null
    }
}
