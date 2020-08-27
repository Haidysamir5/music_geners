import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtists } from "../actions";
import ArtistDetials from "./ArtistDetails";

class GenreArtists extends Component {
    update=false;
  componentDidMount() {
    const { id } = this.props;
    this.props.fetchArtists(id);
  }

componentWillUpdate(){
    this.update=true;
}
  renderArtists() {
    var { artists } = this.props;
    // pathname
    // window.onhashchange
    if (artists.length > 0 && this.update) {
      return artists.map((artist) => {
        return <ArtistDetials artist={artist} key={artist.id} />;
      });
    }
    return "...loading";
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderArtists()}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { artists: state.artists };
}

export default connect(mapStateToProps, { fetchArtists })(GenreArtists);
