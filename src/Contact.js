import React from 'react'
import { NavLink } from 'react-router-dom'

class Contact extends React.Component{
    render(){
        let menu = <div className="menu">
                        <ul>
                            <li><NavLink to = "/about" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">about</NavLink></li>
                            <li><NavLink to = "/" style = {{textDecoration: 'none'}} className = "inactive" activeClassName="active">home</NavLink></li>
                        </ul>
                    </div>
        return(
            <div>
                {menu}
                Contact me <a className="contact-link" href="https://www.linkedin.com/in/yulid/">here</a>.
            </div>
        )
    }
}

export default Contact 