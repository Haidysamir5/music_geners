import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import GenreArtists from "./GenreArtists";
class GenreItem extends Component {

  state = { visible: false }; //modal state

  showModal = (id) => {
    this.setState({
      visible: true,
    });
    window.history.replaceState(null, null, `${id}`); //change url to add id without reload 
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
    this.handleClose();
  };
  handleClose = (e) => {

    window.history.replaceState({}, document.title, "/" + ""); //change url to remove id without reload 

  };

  render() {
    const { props } = this.props;
    let { id , name, picture_big, type } = props;
    return (
      <div className="col-12 col-md-4 col-lg-3">
        <div className="single-show-item mb-30">
          <img src={picture_big} alt="" />
          <div className="overlay-content">
            <div className="text-center">
              <span>{type}</span>

             <Link to={`/${id}`} target="_blank" className="link"><h5>{name}</h5></Link> 
             
              <Button
                className="mt-2 btn  btn-pink "
                type="primary"
                onClick={() => {
                  this.showModal(id);
                }}
              >
                Show artists
              </Button>
              
             
            </div>
          </div>
          <Modal
                style={{ top: 20 }}
                width={900}
                footer={null}
                title="Artists"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onClose={this.handleClose}
              >
                {<GenreArtists id={id} />}
              </Modal>
        </div>
      </div>
    );
  }
}

export default connect()(GenreItem);

