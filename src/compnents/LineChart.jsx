import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinprice = [];
  const coinTimestamp = [];
  console.log(coinHistory);
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinprice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }

  console.log(coinHistory?.data?.change);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "price in USD",
        data: coinprice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} price chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
}

export default LineChart;
