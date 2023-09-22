
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {

  return (
    <>

      <Navbar />
      <DaisyNav />

      <h1 className='bg-rose-400 text-6xl font-bold text-rose-50 p-4'>React Gym</h1>

      <PriceOptions />

    </>
  )
}

export default App
