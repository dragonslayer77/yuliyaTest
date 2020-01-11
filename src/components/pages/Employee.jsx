import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Statistic, Row, Col, Button,
} from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import dataHandler from '../../data/dataHandler'
import History from '../lists/History'

const StyledButton = styled(Button)`
  margin: 10px;
`

class Employee extends Component {
  constructor(props) {
    const { match: { params: { userId } } } = props
    super(props)
    this.state = {
      ...dataHandler.get('employees', parseInt(userId, 10)),
    }
  }

  componentDidUpdate() {
    const { match: { params: { userId } } } = this.props
    dataHandler.set('employees', parseInt(userId, 10), this.state)
  }

  onSubmitInfo = () => {
    const { points, history } = this.state
    this.setState(prevState => ({ ...prevState, points: points + 50, history: [...history, 'Submitted Info, +50 bitGrows'] }))
  };

  onEventParticip = () => {
    const { points, history } = this.state
    this.setState(prevState => ({ ...prevState, points: points + 200, history: [...history, 'Participated in an Event, +200 bitGrows'] }))
  };

  onFailSubmit = () => {
    const { points, history } = this.state
    this.setState(prevState => ({ ...prevState, points: points - 100, history: [...history, 'Did not submit Info, -100 bitGrows'] }))
  };

  render() {
    if (Object.keys(this.state).length === 0) {
      return (
        <div>
          <Link to="/employee">
            <Button type="primary">Home</Button>
          </Link>
          <h1>Invalid ID!</h1>
        </div>
      )
    }
    const { name, points, history } = this.state
    return (
      <div>
        <Link to="/employee">
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
            <History history={history} />
          </Col>
        </Row>
      </div>
    )
  }
}

Employee.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Employee
