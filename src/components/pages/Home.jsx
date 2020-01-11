import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  margin: 20px;
  text-align: center;
`

const Employees = () => {
  return (
    <Wrapper>
      <h1>BitGrow</h1>
      <Link to="employee">Manage Employees</Link>
    </Wrapper>
  )
}

export default Employees
