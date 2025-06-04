import './App.css'
import Header from './components/Header/Header'
import ProcurementManagement from './components/ProcurementManagement/ProcurementManagement'
import SoftwareSubscriptionManagement from './components/SoftwareSubscriptionManagement/SoftwareSubscriptionManagement'

function App() {

  return (
    <>
      <Header />
      <SoftwareSubscriptionManagement />
      <ProcurementManagement />
    </>
  )
}

export default App
