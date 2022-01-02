import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Active Users (Bar Chart)",
    },
  },
};

export const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Active Users (Line Chart)",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Active Users",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(0, 137, 123, 0.5)",
    },
    {
      label: "Inactive Users",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(30, 136, 229, 0.5)",
    },
  ],
};

const GREY = "#efefef";

const styles = {
  card: {
    boxShadow: `3px 3px 5px ${GREY}`,
  },
};

export default () => {
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col sm="4">
          <Card className="my-4" style={styles.card}>
            <CardTitle className="py-2 title">
              <center>
                <h6>Total Users</h6>
              </center>
            </CardTitle>
            <CardBody>
              <center>
                <h2>720</h2>
              </center>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="my-4" style={styles.card}>
            <CardTitle className="py-2 title">
              <center>
                <h6>Total Orders</h6>
              </center>
            </CardTitle>
            <CardBody>
              <center>
                <h2>209</h2>
              </center>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="my-4" style={styles.card}>
            <CardTitle className="py-2 title">
              <center>
                <h6>Shipped Orders</h6>
              </center>
            </CardTitle>
            <CardBody>
              <center>
                <h2>192</h2>
              </center>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col sm="6">
          <Bar options={barOptions} data={data} />
        </Col>
        <Col sm="6">
          <Line options={lineOptions} data={data} />
        </Col>
      </Row>
      <style jsx>{`
        title {
          color: #616161;
        }
      `}</style>
    </Container>
  );
};
