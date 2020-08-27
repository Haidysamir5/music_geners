import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGenre } from "../actions";
import GenreItem from "./GenreITem";

class GenreList extends Component {

  componentDidMount() {
    this.props.fetchGenre(); //fetch genre on mount
  }

  renderGenre() {
    var { genres } = this.props;
    //loop on genres and get genreitem of each one
    if(genres.length > 0){
      return genres.map((genre) => {
        return <GenreItem props={genre}  key={genre.id}/>; 
      });
    }
    return "...loading";
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div  className="mt-2 mb-2" style={{height:"50px ", background:"#dc2878"}}>
              <h5 className="p-2 text-white"> Genre Types</h5>
            </div>
          </div>
        </div>
        <div className="row">{this.renderGenre()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { genres: state.genres };
}

export default connect(mapStateToProps, { fetchGenre })(GenreList);

