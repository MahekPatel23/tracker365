import './App.css'
import HardwareLifeCycle from './components/HardwareLifeCycle/HardwareLifeCycle'
import Header from './components/Header/Header'
import ProcurementManagement from './components/ProcurementManagement/ProcurementManagement'
import SoftwareSubscriptionManagement from './components/SoftwareSubscriptionManagement/SoftwareSubscriptionManagement'
import SupportTicketManagement from './components/SupportTicketManagement/SupportTicketManagement'

function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Header />
      <SoftwareSubscriptionManagement />
      <ProcurementManagement />
      <HardwareLifeCycle />
      <SupportTicketManagement />
    </div>
  )
}

export default App
