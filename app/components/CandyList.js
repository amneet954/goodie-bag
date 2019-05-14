import React from "react";
import { gettingCandies } from "../reducers";
import { connect } from "react-redux";
class CandyList extends React.Component {
  componentDidMount() {
    this.props.getAllCandies();
  }

  //componentDidMount creates this.props.candies after mount
  render() {
    console.log("-IN CANDYLIST RENDER", this.props.candies);
    return (
      <div className="container">
        <h2>ALL CANDIES</h2>
        {this.props.candies.map(candy => (
          <div key={candy.id}>
            <h4>{candy.name}</h4>
            <img src={candy.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ candies: state.allCandies });

const mapDispatchToProps = dispatch => ({
  getAllCandies: () => dispatch(gettingCandies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandyList);
