import { Link } from "react-router-dom"

const nav = () => {
  return (
    <div className="navbar  ">
        <Link className="btn" to="/">home</Link>
        <Link className="btn" to="/add">new post</Link>
    </div>
  )
}

export default nav