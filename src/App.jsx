import './App.css'
import Footer from './components/Footer/Footer'
import HardwareLifeCycle from './components/HardwareLifeCycle/HardwareLifeCycle'
import Header from './components/Header/Header'
import InquiryForm from './components/InquiryForm/InquiryForm'
import ProcurementManagement from './components/ProcurementManagement/ProcurementManagement'
import ServiceCards from './components/ServiceCards/ServiceCards.'
import ServiceContractManagement from './components/ServiceContractManagement/ServiceContractManagement'
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
      <ServiceContractManagement />
      <ServiceCards />
      <InquiryForm />
      <Footer />
    </div>
  )
}

export default App
