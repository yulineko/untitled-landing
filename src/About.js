import React from 'react'
import { NavLink } from 'react-router-dom'

class About extends React.Component{
    render(){
        let menu = <div className="menu">
                <ul>
                    <li><NavLink to = "/contact" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">contact</NavLink></li>
                    <li><NavLink to = "/" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">back</NavLink></li>
                </ul>
            </div>

        return(
            <div>
                {menu}
                About
            </div>
        )
    }
}

export default About