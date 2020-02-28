import React, { Component } from "react";
import "../style/ProjectModal.css";
import Iframe from "react-iframe";
import Modal from "react-modal";

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = this.handleOpenModal.bind(this);
  handleCloseModal = this.handleCloseModal.bind(this);

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Open Modal</button>
        <Modal isOpen={this.state.showModal} className="ProjectModal">
          <Iframe url={this.props.ProjectUrl} className="ProjectDisplay" />
          <div className="closeButton" onClick={this.handleCloseModal}>
            +
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectModal;
