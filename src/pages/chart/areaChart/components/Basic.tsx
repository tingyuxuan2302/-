import React from 'react';
import { Chart, Geom, Axis } from 'bizcharts';

const data = [
  {
    year: '1991',
    value: 15468
  },
  {
    year: '1992',
    value: 16100
  },
  {
    year: '1993',
    value: 15900
  },
  {
    year: '1994',
    value: 17409
  },
  {
    year: '1995',
    value: 17000
  },
  {
    year: '1996',
    value: 31056
  },
  {
    year: '1997',
    value: 31982
  },
  {
    year: '1998',
    value: 32040
  },
  {
    year: '1999',
    value: 33233
  }
];
const scale = {
  value: {
    min: 10000,
    alias: '数量'
  },
  year: {
    range: [0, 1],
    alias: '年份'
  }
};

const Basic: React.FC = () => {
  return (
    <Chart height={400} width={400} padding={50} background={{ fill: '#fff' }} data={data} scale={scale} forceFit>
      <Axis name="year" />
      <Axis
        name="value"
        label={{
          formatter: (val: string) => (Number(val) / 10000).toFixed(1) + 'k'
        }}
      />
      <Geom type="area" position="year*value" />
      <Geom type="line" position="year*value" tooltip="year*value" />
    </Chart>
  );
};

export default Basic;
