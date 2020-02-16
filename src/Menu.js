import React from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <ul>
                    <li><NavLink to = "/about" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">about</NavLink></li>
                    <li><NavLink to = "/contact" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">contact</NavLink></li>
                    <li><NavLink to = "/" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">back</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Menu



                    {/* <li><NavLink to = "/" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">back</NavLink></li> */}
