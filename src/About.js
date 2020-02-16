import React from 'react'
import { NavLink } from 'react-router-dom'

class About extends React.Component{
    render(){
        let menu = <div className="menu">
                <ul>
                    <li><NavLink to = "/contact" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">contact</NavLink></li>
                    <li><NavLink to = "/" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">home</NavLink></li>
                </ul>
            </div>

        return(
            <div>
                {menu}
                <p>inyourspace.xyz is an astrophotography project</p>
            </div>
        )
    }
}

export default About