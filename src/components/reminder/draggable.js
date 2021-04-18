import React, { Component } from 'react';
import Draggable from 'react-draggable';

class MoveAround extends Component {
    state = {
      disabled: false
    };
  
    toggleDraggable = () =>
      this.setState(prevState => ({ disabled: !this.state.disabled }));
  
    render = () => {
      const { disabled } = this.state;
      return (
        <div className="container">
          <Draggable disabled={disabled} >
            <div
              style={{ width: "20rem", backgroundColor: "#e3f2fd", padding: "1rem", borderRadius: "5px" }}
              className={!disabled ? "draggable" : null}
            >
              <h4 style={{ fontSize: "1.5rem", userSelect: "none" }}>
                {!disabled && "I'm here to remind you of..."}
              </h4>
              <textarea disabled={!disabled} style={{ backgroundColor: "#ffffff", borderRadius: "2px" }} placeholder="Disable drag and write yourself a note here. You can move this around." />
              <button
                onClick={this.toggleDraggable}
              >
                {disabled ? "Enable" : "Disable"} Drag
              </button>
            </div>
          </Draggable>
        </div>
      );
    };
  }

export default MoveAround; 