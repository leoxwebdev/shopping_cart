import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import '../../stylesheets/header/header'
import { fetchSearchItems, startFetchingSearchItems } from '../../actions/search/searchActions'

@connect((store) => {
    return {
      searchItems: store.searchReducer.searchItems,
      fetched: store.searchReducer.fetched
    }
})

export default class Header extends Component{
    handleSeach(event){
        this.props.dispatch(startFetchingSearchItems());
        this.props.dispatch(fetchSearchItems());
    }

    clearSearch(event){
        event.target.value = '';
        this.props.dispatch(startFetchingSearchItems());
    }

    handleDetailePage(id, mediaType){
      return location.pathname + "/" + mediaType + "/" + id;
    }

    render(){
        var listElement = [];
        if(this.props.searchItems.length > 0){
           listElement = this.props.searchItems.map( (item, index) => {
             return <a href="" key={item.p_id} className="list-group-item list-group-item-action ">
                <div className="row">
                    <div className="col-md-3">
                        <img src={require('../../images/T' + item.p_id + '.png')} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h3 className="list-group-item-heading">{item.p_name ? item.p_name : '' }</h3>
                        <p className="list-group-item-text">{item.p_variation ? item.p_variation : '' } {item.release_date ? item.release_date: ''} </p>
                     </div>
                </div>
             </a>
           });
        }

        return(
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container nav-container">
                   <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="/home">
                          <img src={require('../../images/logo.png')} alt="" />
                      </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <form className="navbar-form navbar-right">
                          <input type="text" className="form-control" placeholder="Search for movies/tv shows..." onFocus={this.handleSeach.bind(this)} onBlur={this.clearSearch.bind(this)}/>
                          <div className={"list-group " + (this.props.fetched ? '': 'inactive')}>
                             {listElement}
                          </div>
                      </form>
                  </div>
               </div>
            </nav>
        )
    }
}
