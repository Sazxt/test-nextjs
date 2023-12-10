"use client"

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
export default function Routerswitch()
{
    return (<>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/" element={<h1>Home</h1>} />
                </Routes>
            </div>
        </Router>
    </>)
}