import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

const MobileNavLinks = () => {
    const {logout}=useAuth0()
  return (
    <div>
        <Link to='/profile' 
        className="flex bg-white items-center font-bold hover:text-orange-500"
        >
            User Profile
        </Link>
        <Button 
        className="flex items-center px-3 mt-3 font-bold hover:bg-gray-500 "
        onClick={()=>logout()}
        >
            Log Out
        </Button>
    </div>
  )
}

export default MobileNavLinks