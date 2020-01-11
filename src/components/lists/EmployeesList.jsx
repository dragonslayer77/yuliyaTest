import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import {
  Table, Input, Button, Icon,
} from 'antd'
import Highlighter from 'react-highlight-words'
import styled from 'styled-components'
import dataHandler from '../../data/dataHandler'

const StyledTable = styled(Table)`
`

class EmployeesList extends Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
            Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => record[dataIndex]
      .toString()
      .toLowerCase()
      .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select())
      }
    },
    render: (text) => {
      const { searchedColumn, searchText } = this.state
      return (
        searchedColumn === dataIndex
          ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          )
      )
    },
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    })
  };

  handleReset = (clearFilters) => {
    clearFilters()
    this.setState({ searchText: '' })
  };

  render() {
    const currentEmployees = dataHandler.getAll('employees')
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
        render: (text, record,) => <Link to={`employee/view/${record.key}`}>{text}</Link>,
      },
      {
        title: 'Points',
        dataIndex: 'points',
        key: 'points',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.points - b.points,
      },
    ]
    return (
      currentEmployees
        ? <StyledTable dataSource={currentEmployees} columns={columns} pagination={false} size="middle" />
        : <div> There is no Employee Registered yet! </div>
    )
  }
}

export default EmployeesList
