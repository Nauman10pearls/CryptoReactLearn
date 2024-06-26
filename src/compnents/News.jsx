import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../Services/CryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

function News({ simplified }) {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });
  console.log(cryptoNews);
  return <div>Test</div>;
}

export default News;
