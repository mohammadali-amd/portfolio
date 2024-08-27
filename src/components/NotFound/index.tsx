import { Link } from "react-router-dom"

const NotFound = () => {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
         <h1 className="text-6xl font-bold text-gray-800 mb-4">404!</h1>
         <p className="text-2xl text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
         <Link to="/">
            <span className="text-lg text-emerald-500 hover:underline">
               Go back to Home
            </span>
         </Link>
      </div>
   )
}

export default NotFound
