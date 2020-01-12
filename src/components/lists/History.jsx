import React from 'react'
import PropTypes from 'prop-types'

import { Timeline } from 'antd'

const History = ({ history }) => {
  // console.log({history, historyrev: history.reverse()})
  return (
    <Timeline>
      {history && history.slice(0).reverse().map(history => (
        <Timeline.Item color={history.indexOf('-') === -1 ? 'green' : 'red'} key={`${history}-${Math.random()}`}>
          {history}
        </Timeline.Item>
      ))}
    </Timeline>
  )
}

History.propTypes = {
  history: PropTypes.array,
}

export default History
