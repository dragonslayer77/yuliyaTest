import React, { Component } from "react";

import { Statistic, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dataHandler from "../../data/dataHandler";
import History from "../lists/History";

const StyledButton = styled(Button)`
  margin: 10px;
`;

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...dataHandler.get("employees", this.props.match.params.userId)
    };
  }
  componentDidUpdate() {
    dataHandler.set("employees", this.props.match.params.userId, this.state)
  }

  onSubmitInfo = () => {
    this.setState({ ...this.state, points: this.state.points + 50, history: [...this.state.history, "Submitted Info, +50 bitGrows"] });
  };
  onEventParticip = () => {
    this.setState({ ...this.state, points: this.state.points + 200, history: [...this.state.history, "Participated in an Event, +200 bitGrows"]  });
  };
  onFailSubmit = () => {
    this.setState({ ...this.state, points: this.state.points - 100, history: [...this.state.history, "Did not submit Info, -100 bitGrows"]  });
  };

  render() {
    const { name, points, history } = this.state;
    return (
      <div>
        <Link to="/">
          <Button type="primary">Home</Button>
        </Link>
        <h1>{name}</h1>
        <Row>
          <Col span={12}>
            <Row gutter={16}>
              <Col span={12}>
                <Statistic title="Current BitGrow" value={points} />
              </Col>
            </Row>
            <Row>
              <StyledButton onClick={this.onSubmitInfo} shape="round">
                Submitted Hours
              </StyledButton>
              <StyledButton onClick={this.onSubmitInfo} shape="round">
                Submitted Absences
              </StyledButton>
              <StyledButton onClick={this.onEventParticip} shape="round">
                Participated in an Event
              </StyledButton>
            </Row>
            <Row>
              <StyledButton
                onClick={this.onFailSubmit}
                type="danger"
                shape="round"
              >
                Failed to Submit Hours
              </StyledButton>
              <StyledButton
                onClick={this.onFailSubmit}
                type="danger"
                shape="round"
              >
                Failed to Submit Absences
              </StyledButton>
            </Row>
          </Col>
          <Col span={12}>
            <History history={history}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Employee;
