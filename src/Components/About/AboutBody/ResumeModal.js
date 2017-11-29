import React, { Component } from 'react';

class ResumeModal extends Component {
  render() {
    return (
      <div>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#resumeModal">
          CV
        </button>

        <div className="modal" id="resumeModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Resume</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img className="cvimg" src={require("../../../assets/Resume_Gildon_Kirk.jpg")} alt=""/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  };
}

export default ResumeModal;
