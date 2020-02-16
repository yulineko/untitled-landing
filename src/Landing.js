import React from 'react'
import { NavLink } from 'react-router-dom'

class Landing extends React.Component{
    render(){
        let menu = <div className="menu">
                <ul>
                  <li><NavLink to = "/about" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">about</NavLink></li>
                  <li><NavLink to = "/contact" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">contact</NavLink></li>
                </ul>
            </div>

        return(
            <div>
                {menu}
                <div>
                    Something out of this world is coming soon...
                </div>
            </div>
        )
    }
}

export default Landing