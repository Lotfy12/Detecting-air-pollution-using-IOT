import React from "react";
import styles from "../components/ChartsData.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "time 0", humidity: 0, temperature: 0, amt: 0 },
  { name: "time 10", humidity: 7, temperature: 20, amt: 10 },
  { name: "time 20", humidity: 12, temperature: 30, amt: 22 },
  { name: "time 30", humidity: 15, temperature: 40, amt: 25 },
  { name: "time 40", humidity: 17, temperature: 50, amt: 24 },
  { name: "time 50", humidity: 19, temperature: 60, amt: 34 },
  { name: "time 60", humidity: 23, temperature: 70, amt: 40 },
  { name: "time 70", humidity: 26, temperature: 80, amt: 50 },
  { name: "time 80", humidity: 35, temperature: 80, amt: 52 },
  { name: "time 90", humidity: 70, temperature: 90, amt: 72 },
  { name: "time 100", humidity: 100, temperature: 100, amt: 100 },
];

const data2 = [
  { name: "time 0", dust: 0, amt: 0 },
  { name: "time 10", dust: 20, amt: 10 },
  { name: "time 20", dust: 30, amt: 22 },
  { name: "time 30", dust: 40, amt: 25 },
  { name: "time 40", dust: 50, amt: 24 },
  { name: "time 50", dust: 60, amt: 34 },
  { name: "time 60", dust: 70, amt: 40 },
  { name: "time 70", dust: 80, amt: 50 },
  { name: "time 80", dust: 80, amt: 52 },
  { name: "time 90", dust: 90, amt: 72 },
  { name: "time 100", dust: 100, amt: 100 },
];

const data3 = [
  {
    name: "time 0",
    NH3: 0,
    H2S: 2,
    BEN2EN: 4,
    CO: 6,
    ALCOHOL: 14,
    CO2: 12,
    CH4: 13,
    LPCO: 3,
    CH4H2O: 6,
    amt: 0,
  },
  {
    name: "time 10",
    NH3: 3,
    H2S: 10,
    BEN2EN: 20,
    CO: 13,
    ALCOHOL: 14,
    CO2: 15,
    CH4: 16,
    LPCO: 19,
    CH4H2O: 16,
    amt: 10,
  },
  {
    name: "time 20",
    NH3: 10,
    H2S: 6,
    BEN2EN: 20,
    CO: 16,
    ALCOHOL: 14,
    CO2: 14,
    CH4: 14,
    LPCO: 14,
    CH4H2O: 16,
    amt: 20,
  },
  {
    name: "time 30",
    NH3: 0,
    H2S: 3,
    BEN2EN: 14,
    CO: 6,
    ALCOHOL: 15,
    CO2: 5,
    CH4: 6,
    LPCO: 9,
    CH4H2O: 20,
    amt: 30,
  },
  {
    name: "time 40",
    NH3: 4,
    H2S: 6,
    BEN2EN: 20,
    CO: 19,
    ALCOHOL: 18,
    CO2: 17,
    CH4: 16,
    LPCO: 19,
    CH4H2O: 17,
    amt: 40,
  },

  {
    name: "time 50",
    NH3: 13,
    H2S: 20,
    BEN2EN: 20,
    CO: 13,
    ALCOHOL: 14,
    CO2: 15,
    CH4: 16,
    LPCO: 17,
    CH4H2O: 18,
    amt: 50,
  },
  {
    name: "time 60",
    NH3: 13,
    H2S: 14,
    BEN2EN: 15,
    CO: 17,
    ALCOHOL: 17,
    CO2: 17,
    CH4: 16,
    LPCO: 18,
    CH4H2O: 18,
    amt: 60,
  },
  {
    name: "time 70",
    NH3: 4,
    H2S: 5,
    BEN2EN: 16,
    CO: 17,
    ALCOHOL: 17,
    CO2: 17,
    CH4: 16,
    LPCO: 14,
    CH4H2O: 16,
    amt: 70,
  },
  {
    name: "time 80",
    NH3: 3,
    H2S: 14,
    BEN2EN: 20,
    CO: 15,
    ALCOHOL: 16,
    CO2: 17,
    CH4: 20,
    LPCO: 19,
    CH4H2O: 16,
    amt: 90,
  },
  {
    name: "time 90",
    NH3: 0,
    H2S: 10,
    BEN2EN: 20,
    CO: 13,
    ALCOHOL: 4,
    CO2: 5,
    CH4: 6,
    LPCO: 9,
    CH4H2O: 6,
    amt: 100,
  },
];

function ChartsData() {
  return (
    <body className={styles.chartsBackground}>
      <div className={styles.chartsDivide}>
        <ResponsiveContainer width="50%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="50%" height={300}>
          <LineChart
            data={data2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="dust"
              stroke="#0AFF0A"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data3}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="NH3" stroke="#82ca9d" />
          <Line type="monotone" dataKey="H2S" stroke="#040720" />
          <Line type="monotone" dataKey="BEN2EN" stroke="#2B547E" />
          <Line type="monotone" dataKey="CO" stroke="#007C80" />
          <Line type="monotone" dataKey="ALCOHOL" stroke="#7B8000" />
          <Line type="monotone" dataKey="CO2" stroke="#B0E0E6" />
          <Line type="monotone" dataKey="CH4" stroke="#AD8" />
          <Line type="monotone" dataKey="LPCO" stroke="#4682B4" />
          <Line type="monotone" dataKey="CH4H2O" stroke="#6A5ACD" />
        </LineChart>
      </ResponsiveContainer>
    </body>
  );
}

export default ChartsData;
