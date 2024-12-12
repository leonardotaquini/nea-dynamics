import { HomePage } from "@/home/pages/HomePage"
import { ServicesPage } from "@/services/pages/ServicesPage"
import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
    </Routes>
  )
}
