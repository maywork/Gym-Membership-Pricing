
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {

  return (
    <>

      <Navbar />
      <DaisyNav />

      <h1 className='bg-rose-400 text-4xl font-bold text-rose-50 p-4  pl-12'>React Gym</h1>

      <PriceOptions />
      <LineChart />

    </>
  )
}

export default App
