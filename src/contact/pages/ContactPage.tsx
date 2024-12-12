import { NavbarUI } from "@/components/ui/NavbarUI"
import { Contact } from "../components/Contact"

export const ContactPage = () => {
  return (
    <main className=" h-screen grid grid-cols-12">
        <div className="col-span-12 ">
            <NavbarUI/>
        </div>
        <div className="col-span-12 sm:col-span-6  flex justify-center items-center">
            <Contact/>
        </div>
        <div className="hidden sm:flex sm:justify-center sm:items-center sm:col-span-6 ">
           
        </div>

    </main>
  )
}
