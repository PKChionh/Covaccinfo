import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartCategoryAxis, 
  ChartCategoryAxisTitle, ChartCategoryAxisItem, ChartLegend, ChartArea, ChartValueAxis, ChartValueAxisItem } from '@progress/kendo-react-charts';

var states = []
var statesData = []

class DataGrid extends React.Component {
  baseUrl = 'https://covidtracking.com/api/states';

  init = {  method: 'GET', 
            accept: 'application/json', 
  };

  state = {
    categories: []
  };

  componentDidMount() {
    fetch(this.baseUrl, this.init)
      .then(response => response.json())
      .then(json => {
        this.setState({ categories: json })

        console.log("categories length: ", this.state.categories);

        var i;
        if (states.length === 0) {
          for (i=0; i < this.state.categories.length; i++) {
            states.push(this.state.categories[i].state);
  
            statesData.push(this.state.categories[i].positive);
          }
        }

      }); 


    console.log("states: ", states);
  }

  render() {
    return (
      <div>

        <Chart style={{height: "500px"}}>
          <ChartTitle text="List of Covid-19 Cases in USA" />
          
          <ChartArea background="#eee" margin={0} height={500} />

          <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={ states } 
                                    labels={{ format: "d", rotation: "auto" }}>
              <ChartCategoryAxisTitle text="States" />
            </ChartCategoryAxisItem>

          </ChartCategoryAxis>

          <ChartSeries>
            <ChartSeriesItem type="column" gap={1} spacing={0.25} data={ statesData } />
          </ChartSeries>

          <ChartValueAxis>
            <ChartValueAxisItem
              title={{
                text: "No. of Cases",
              }}
              min={0}
              max={4000000}
            />
          </ChartValueAxis>

          <ChartLegend position="bottom" orientation="vertical" visible={true} />

        </Chart>

        <Grid
          style={{ height: '550px' }}
          data={this.state.categories}
          expandField="expanded"
          onExpandChange={this.expandChange}
            >

          <Column field="date" title="Date" width="100px" />
          <Column field="state" width="80px" title="State" />
          <Column field="positive" title="Positive" />
        </Grid>
      </div>
    );
  }
}

export default DataGrid;
