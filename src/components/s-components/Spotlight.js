import React from 'react'
import { Link } from 'react-router-dom';
import "./Small.css"


/*
As a reminder the "to" prop for link is what makes it scroll to a specific place depending on the hash as ot works with the
useEffect in the Projects.
*/
function Spotlight() {
  return (
    <div className="spread">
        <h1>
            Click To See:
        </h1>
        <Link className="button-89 moreInfo simple" to="/projects#MCP">My Most Challenging Project</Link>
        <Link className="button-89 moreInfo simple" to="/projects#MRP">My Most Recent Project</Link>
    </div>
  )
}

export default Spotlight