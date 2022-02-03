import HeaderContainer from "./container/header";
import NavbarContainer from "./container/navbar";
import MainPage from "./pages/main";
import { NavDisplayProvider } from "./contexts/NavDisplayContext";
import FaqsPage from "./pages/faq";
import AboutPage from "./pages/about"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContactPage from "./pages/contact";
import { DeviceWidthProvider } from "./contexts/DeviceWidthContext";
import NotificationContainer from "./container/notification";
import { useNotificationContext } from "./contexts/NotificationContext"
import { useState } from "react";

function App() {
  const { showNotification } = useNotificationContext()
  const [currentTime, setCurrentTime] = useState(() => {
    const date = new Date()
    const time = `${date.getHours()}:${date.getMinutes()}`
    return time
  })
  
  return (
    <BrowserRouter>
      <DeviceWidthProvider>
      <NavDisplayProvider>
        {showNotification && (currentTime > "22:30" || currentTime < "17:00") && <NotificationContainer></NotificationContainer>}
        <NavbarContainer></NavbarContainer>
        <HeaderContainer></HeaderContainer>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </NavDisplayProvider>
      </DeviceWidthProvider>
    </BrowserRouter>
  );
}

export default App;