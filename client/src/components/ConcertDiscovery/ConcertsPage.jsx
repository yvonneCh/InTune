import React, { Component } from "react";
import { Concert } from "../";
import "./ConcertsPage.scss";

class ConcertsPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.getConcerts = this.getConcerts.bind(this);
    if (
      !this.props.concert.concertsData ||
      !this.props.concert.concertsData.fetched
    ) {
      this.getConcerts();
    }
  }
  getConcerts() {
    this.props.getConcerts();
  }
  render() {
    var isValid = true;
    if (
      !this.props.concert.concertsData ||
      !this.props.concert.concertsData.fetched
    ) {
      isValid = false;
    } else {
      console.log(this.props.concert.concertsData[0].displayName);
    }
    return (
      isValid && (
        <div className="concert-discovery-wrapper">
          <div className="header">Concert Discovery</div>
          <div className="concert-list-wrapper">
            <Concert />
          </div>
        </div>
      )
    );
  }
}

export default ConcertsPage;
