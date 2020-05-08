import withRedux from "next-redux-wrapper";
import react from "react";
import styles from "./search.module.css";
import { connect } from "react-redux";

class Search extends react.Component {
  state = {
    value: "",
    arr: [],
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userValue(this.state.value);
  };

  // handleSave = (event) => {
  //   event.preventDefault();
  //   let counter = 0;
  //   this.state.arr.forEach((item) =>
  //     item === this.state.value ? counter++ : ""
  //   );
  //   counter === 0 ? this.state.arr.push(this.state.value) : "";
  //   this.props.queriesInput("" + this.state.arr);
  // };

  saveARRR = () => {
    this.props.dispatch({ type: "TAKE_QUERY" });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} className={styles.form}>
          <input
            className={styles.input__value}
            type="text"
            onChange={this.handleChange}
            placeholder="Search for a photo..."
          />
          <input type="submit" className={styles.form__submit_button} />
          <button
            className={styles.form__submit_button}
            // onClick={this.handleSave}
            onClick={this.saveARRR}
          >
            SAVE
          </button>
          text: {this.props.val}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ val: state.queryDispatch.val });

//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(Search);
