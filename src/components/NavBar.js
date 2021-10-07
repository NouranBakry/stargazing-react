import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function NavBar() {
        return (
            <div className="navbar">
                <ul>
                    <Link className="link" to="/" exact>Take Me Home</Link>
                </ul>
            </div>
        );
}
