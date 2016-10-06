import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { clearNowPlayingMovies, fetchNowPlayingMovies } from '../../actions/movies/now-playing-actions'
import ItemListContainer  from '../utils/item-list-container'


@connect( (store) => {
    return{
      dates: store.nowPlayingReducer.dates,
      nowPlayingMovies: store.nowPlayingReducer.nowPlayingMovies,
      moviesFetched: store.nowPlayingReducer.fetched
    }
})
export default class NowPlaying extends Component{
    componentWillMount(){
        this.props.dispatch(fetchNowPlayingMovies())
    }

    render(){
        var movieListElement = [];
        var minimum = '';
        if(this.props.nowPlayingMovies.length){
            movieListElement = <ItemListContainer urlPrefix='/now-playing/' mediaType='movie' displayLength='all' items={this.props.nowPlayingMovies} />
            minimum = this.props.dates.minimum
        }
        return(
          <div className="container">

              <h2 className="page-header">
                  <span>Now Playing Movies</span>
                  <span className="pull-right dates">
                    <span className={(this.props.dates.maximum ? '': 'inactive')}> {this.props.dates.maximum } </span>
                    <span> - </span>
                    <span className={(this.props.dates.minimum ? '': 'inactive')}> {this.props.dates.minimum ? this.props.dates.minimum : "" } </span>
                  </span>
              </h2>

              <div className={"row placeholders" +  (this.props.moviesFetched ? '': 'inactive')}>
                   {movieListElement}
              </div>
          </div>
        )
    }
}
