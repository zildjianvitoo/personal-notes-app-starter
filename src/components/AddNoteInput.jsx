import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";

class AddNoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form
        className="add-new-page__input"
        onSubmit={this.onSubmitEventHandler}
      >
        <input
          className="add-new-page__input__title"
          placeholder="Catatan rahasiamu"
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <textarea
          className="add-new-page__input__body"
          placeholder="Sebenarnya gw adalah"
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <div className="add-new-page__action">
          <button className="action" type="submit">
            <AiOutlineCheck />
          </button>
        </div>
      </form>
    );
  }
}

AddNoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddNoteInput;
