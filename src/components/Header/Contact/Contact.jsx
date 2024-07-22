import { ContactContextProvider } from './Context'
import ContactWrapper from './ContactWrapper2'

const Contact = ({closeContact}) => {
  
  return (
    <ContactContextProvider>
      <ContactWrapper closeContact={closeContact}/>
    </ContactContextProvider>

  )
}

export default Contact
