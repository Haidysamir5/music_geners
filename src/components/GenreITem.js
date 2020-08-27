import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import { Route } from "react-router-dom";
import GenreArtists from "./GenreArtists";
class GenreItem extends Component {
  state = { visible: false };
  prevId = "";
  showModal = (id) => {
    this.setState({
      visible: true,
    });
    window.history.replaceState(null, null, `${id}`);
    this.prevId = id;
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
    this.handleClose();
  };
  handleClose = (e) => {
    // const modal = Modal.info();

    window.history.replaceState({}, document.title, "/" + "");

    // debugger
    // Modal.getContainer();
    // Modal.destroy();
  };

  render() {
    const { genre_props } = this.props;
    const { id, name, picture_big, type } = genre_props;

    return (
      <div className="col-12 col-md-6 col-lg-4">
        <div className="single-show-item mb-30">
          <img src={picture_big} alt="" />
          <div className="overlay-content">
            <div className="text-center">
              <span>{type}</span>

             <Link to={`/${id}`} target="_blank"><h5>{name}</h5></Link> 
              <Button
                className="mt-2"
                type="primary"
                onClick={() => {
                  this.showModal(id);
                }}
              >
                Show artists
              </Button>
              <Modal
                style={{ top: 20 }}
                width={900}
                preserve={false}
                forceRender={true}
                footer={null}
                destroyOnClose={true}
                title="Artists"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onClose={this.handleClose}
              >
                {<GenreArtists id={id} />}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenreItem;
