import Logo from "@/assets/images/sinfondo.webp";
import { Navbar } from "@/home/components/Navbar";
import { useNavigate } from 'react-router-dom'

export const NavbarUI = () => {

    const navigate = useNavigate();

  return (
    <>
    
    <nav className="p-4 shadow flex" style={{backgroundColor:'#243579'}}>
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex space-x-3 items-center w-max"
        >
          <img src={Logo} alt="Logo" className="w-20" />
          <h2 className="title text-2xl text-slate-100">NEA DYNAMICS</h2>
        </div>
        <Navbar />
      </nav>
    </>
  )
}
