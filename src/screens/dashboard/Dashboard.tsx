import "./styles.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@blueprintjs/core";
import { FaMagic, FaShoppingCart } from "react-icons/fa";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { useHistory } from "react-router";
import { ROUTES } from "../../screens/Main";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  const { push } = useHistory();
  return (
    <div className="dashboard-container">
      <div>
        <h3>Chart Title</h3>
      </div>
      <div className="chart-container">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={700}
              height={500}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="amt"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="d-actions">
        <Button large onClick={() => push(ROUTES.HOME)}>
          <AiOutlineAreaChart />
          Dashboard
        </Button>
        <Button large onClick={() => push(ROUTES.SALE_PREDICTION)}>
          <FaMagic />
          Sales Prediction
        </Button>
        <Button large onClick={() => push(ROUTES.CLOTHING)}>
          <GiClothes />
          Clothing
        </Button>
        <Button large onClick={() => push(ROUTES.ORDERS)}>
          <FaShoppingCart />
          Orders
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
