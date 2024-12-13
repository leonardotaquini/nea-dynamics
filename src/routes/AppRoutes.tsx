import { AboutPage } from "@/about/pages/AboutPage"
import { ContactPage } from "@/contact/pages/ContactPage"
import { HomePage } from "@/home/pages/HomePage"
import { Service } from "@/services/pages/Service"
import { ServicesPage } from "@/services/pages/ServicesPage"
import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/services/' element={<ServicesPage />}/>
        <Route path='/services/:service' element={<Service />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
    </Routes>
  )
}
