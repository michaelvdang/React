import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/', {state: "Error not page (using state to send information from one component to another)"})
    }, 1000)
  })
  
  return (
    <div>NotFound Page</div>
  )
}

export default NotFound;