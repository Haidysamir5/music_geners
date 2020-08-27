import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ArtistDetails extends Component {
  render() {
    const { artist } = this.props;
    const { id, name, picture_medium, type, tracklist } = artist;
    return (
      <div className="col-12 col-md-3 col-xl-2">
        <div className="single-podcast-area mb-30 wow fadeInUp">
          {/* <!-- Thumbnail --> */}
          <div className="podcast-thumb">
            <img src={picture_medium} alt="" />
          </div>
          {/* <!-- Content --> */}
          <div className="podcast-content">
            <div className="podcast-meta">{type}</div>
            <h6>{name}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ArtistDetails);
