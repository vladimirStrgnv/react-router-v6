import { Outlet, Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>This is a demo website about React-router-dom library.</p>
            <ul>
                <li><Link to="contacts">Our Contacts</Link></li>
                <li><Link to="team">Our Team</Link></li>
            </ul>

            <Outlet />
        </div>
    )
}

export {About}