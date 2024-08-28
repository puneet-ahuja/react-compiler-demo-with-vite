import './App.css'
import CounterExample from './components/CounterExample/CounterExample'
import CounterExampleWithUseMemo from './components/CounterExampleWithUseMemo/CounterExampleWithUseMemo'
import CounterExampleWithExternalVariable from './components/CounterExampleWithExternalVariable/CounterExampleWithExternalVariable'

function App() {
  

  return (
    <>
      <h1>React Compiler Demo</h1>

      {/* <CounterExample></CounterExample> */}

      {/* <CounterExampleWithUseMemo></CounterExampleWithUseMemo> */}

      <CounterExampleWithExternalVariable></CounterExampleWithExternalVariable>


    </>
  )
}

export default App
