import './App.css'
import ChartSwitcher from './components/Barchart'
import SelectActionCard from './components/Cards'
import DoughnutChartComponent from './components/DonutChart'
import BasicTable2 from './components/MandateTable'
import PrimarySearchAppBar from './components/Navbar'
import BasicTable from './components/Tables'

function App() {
  return (
    <>
      <PrimarySearchAppBar/>
      <br />
      <SelectActionCard/>
      <br />
      <div style={{width:'750px',position:'relative', left:'750px'}}>
        <h2>Total Amount Generated</h2>
      <BasicTable/>
      </div>
      <div style={{width:'700px',position:'absolute', left:'50px', top:'270px'}}>
        <ChartSwitcher/>
      </div>
      <BasicTable2/>
      <div style={{width:'700px',position:'absolute', right:'40px', top:'670px'}}>
        <DoughnutChartComponent/>
      </div>
    </>
  )
}

export default App
