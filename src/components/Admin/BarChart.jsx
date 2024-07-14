import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Appliances',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Fashion',
    uv: 1468,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Home and Kitchen',
    uv: 1097,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Electronics',
    uv: 1180,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Mobile',
    uv: 1320,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Stationary Items',
    uv: 890,
    pv: 680,
    amt: 1700,
  },
];

export default class BarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/composed-chart-of-same-data-3cs8ym';

  render() {
    return (
      <ResponsiveContainer width="90%" height="85%"   >
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 20,
            bottom: 10,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5a0" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#21c7b4" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
