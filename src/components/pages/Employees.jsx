import React from 'react'
import styled from 'styled-components'
import EmployeesList from '../lists/EmployeesList'

const Wrapper = styled.div`
  margin: 20px;
  text-align: center;
`

const Employees = () => {
  return (
    <Wrapper>
      <h1>BitGrow</h1>
      <EmployeesList />
    </Wrapper>
  )
}

export default Employees
