import { Link } from "react-router-dom"
const NotFound = () =>{
  return(
    <div>
      <h1> 404 - Page Does Not Exist</h1>
      <Link to={"/"}>
      <button> go back home</button>
      </Link>
    </div>
  )
}

export default NotFound
