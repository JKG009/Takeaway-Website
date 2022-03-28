import { HeaderContainer, NavbarContainer, NotificationContainer, FooterContainer } from "./container";
import { MainPage, FaqsPage, AboutPage, ContactPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavDisplayProvider } from "./contexts/NavDisplayContext";
import { DeviceWidthProvider } from "./contexts/DeviceWidthContext";
import { useNotificationContext } from "./contexts/NotificationContext"

function App() {
  const { showNotification } = useNotificationContext()

  const date = new Date()
  const currentTime = `${date.getHours()}:${date.getMinutes()}`
  
  return (
    <BrowserRouter>
      <DeviceWidthProvider>
      <NavDisplayProvider>
        {showNotification && (currentTime > "22:30" || currentTime < "17:00") && <NotificationContainer />}
        <NavbarContainer />
        <HeaderContainer />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
        <FooterContainer />
      </NavDisplayProvider>
      </DeviceWidthProvider>
    </BrowserRouter>
  );
}

export default App;