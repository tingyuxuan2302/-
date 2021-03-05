import React, { FC, useEffect } from 'react';
import { Chart, Axis, Tooltip, Coordinate, Legend, Interval } from 'bizcharts';
import DataSet from '@antv/data-set';
const Workbench: FC = () => {
  useEffect(() => {}, []);

  const data = [
    {
      label: 'Monday',
      series1: 2800,
      series2: 2260
    },
    {
      label: 'Tuesday',
      series1: 1800,
      series2: 1300
    },
    {
      label: 'Wednesday',
      series1: 950,
      series2: 900
    },
    {
      label: 'Thursday',
      series1: 500,
      series2: 390
    },
    {
      label: 'Friday',
      series1: 170,
      series2: 100
    }
  ];
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: 'fold',
    fields: ['series1', 'series2'],
    // 展开字段集
    key: 'type',
    // key字段
    value: 'value' // value字段
  });
  return (
    <div>
      <Chart height={600} data={dv.rows} autoFit>
        <Legend />
        <Coordinate actions={[['scale', 1, -1], ['transpose']]} />
        <Axis
          name="label"
          label={{
            offset: 12
          }}
        />
        <Axis name="value" position={'right'} />
        <Tooltip />
        <Interval
          position="label*value"
          color={'type'}
          adjust={[
            {
              type: 'dodge',
              marginRatio: 1 / 32
            }
          ]}
        />
      </Chart>
    </div>
  );
};

export default Workbench;
