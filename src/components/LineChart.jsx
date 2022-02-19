import React from 'react'
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'
import { convertLegacyProps } from 'antd/lib/button/button'
import { Chart as ChartJS } from 'chart.js/auto' // kullandığım Line componenti hata verdiği için bu importu ekledim 
// The above error occurred in the <ForwardRef(ChartComponent)> component:

const { Title } = Typography

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimeStamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }));
    }
    const data = {
        labels: coinTimeStamp.reverse(),
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice.reverse(),
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            }
        ]
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">
                    {coinName} Price Chart
                </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        {coinHistory?.data?.change}%
                    </Title>
                    <Title level={5} className="current-price">
                        Current {coinName} Price: $ {currentPrice}
                    </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart