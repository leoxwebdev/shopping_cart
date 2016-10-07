import React, { Component } from 'react'
import render from 'react-dom'

export default class ProductDetails extends Component{

  state = {
      color: null
   }

   handleColorChange(color){
      this.setState({
        color: color
      })
   }

   updateCartItems(id, event){
    //  alert(id)
   }

    render(){
        if(this.props.itemDetails){
          const item = this.props.itemDetails;
          return   <div className="container-fluid">
              <div className="col-md-6 pull-center">
                <div className="row">
                <hr/>
                <br/>
                <h3 className="list-group-item-heading">{item.p_name ? item.p_name.toUpperCase() : '' }</h3>
                <br/>
                <h1 className=""> {item.c_currency ? item.c_currency : '' } {item.p_price ? item.p_price : '' }</h1>
                <h4 className="list-group-item-text">{this.state.color ? this.state.color: item.p_variation}</h4>
                </div>
                <div className="fluid-container" style={{margin: '10px 0 10px 40%'  }}>
                    {
                      this.props.itemDetails.p_available_options.colors.map( (color, index) => {
                      return  <span onClick={this.handleColorChange.bind(this, color.name)} style={{ background: color.hexcode }}  className={"color-code " + this.state.color}>  </span>
                      })
                    }
                    <br/>
                    <br/>
                </div>
                <div className="row">
                        <select className="row" style={{width: '100px', height: '45px'}}>
                         <option> Size </option>
                        {
                          this.props.itemDetails.p_available_options.sizes.map( (size, index) => {
                              return <option> {size.name} </option>
                          })
                        }
                      </select>
                      <select className="row" style={{width: '100px', height: '45px', marginLeft: '30px'}}>
                        <option> Qty </option>
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                        <option> 4 </option>
                        <option> 5 </option>

                      </select>
                </div>
                <br/><br/>
                <button className="btn btn-primary" onClick={this.updateCartItems.bind(this, item.p_id)}> Save </button>
                <br/> <br/>
                <a href="#"> See product details </a>
              </div>
              <div className="col-md-6 product-image">
                    <img src={require('../../images/T' + item.p_id + '.png')} alt="" />
              </div>
            </div>
        }
        return(
            <div className="container-fluid">
              <h1>Dialog Content</h1>
              <p>More Content. Anything goes here</p>
            </div>
        )
    }
}
