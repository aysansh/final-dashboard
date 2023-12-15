import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "./ApexChart.scss"

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          series: [80, 67, 75],
          options: {
            chart: {
              height: 350,
              type: 'radialBar',
              events: {
                mounted: function(chartContext, config) {
                  const radialBarChart = chartContext.ctx;
                  radialBarChart.w.globals.dom.baseEl.style.transform = 'rotate(180deg)';
                  radialBarChart.w.globals.dom.baseEl.classList.add('custom-hover');
                },
              },
            },
            stroke: {
              lineCap: 'round',
            },
           
              fill: {
                colors: ['#28A745', '#F59E0B', '#DC3545']
              }
          },
        };
      }
    

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={400} />
      </div>
    );
  }
}

export default ApexChart;
