import React from "react";

import { Timeline } from "antd";

const History = (props) => {
  console.log(props.history);
  return (
    <Timeline>
      {props.history.map(history => (
        <Timeline.Item color="green">
        {history}
        </Timeline.Item>
  ))}
      {/* <Timeline.Item color="green">
      Submitted Hours
      </Timeline.Item>
      <Timeline.Item color="green">
      Submitted Hours
      </Timeline.Item>
      <Timeline.Item color="red">
      Failed to Submit Absences
      </Timeline.Item>
      <Timeline.Item color="red">
      Failed to Submit Absences
      </Timeline.Item>
      <Timeline.Item color="red">
      Failed to Submit Hours
      </Timeline.Item> */}
    </Timeline>
  );
};

export default History;
