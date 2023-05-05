import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className = 'NotFound'>
          <h1 className = 'text-center'>ERROR 404</h1>
          <h3 className = 'text-center'>Oops, we couldn't find this page. Go to <Link to = "/">main page</Link></h3>
        </div>
      )
}

export default NotFound;