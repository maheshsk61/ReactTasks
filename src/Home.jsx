import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    const linkTag = {
        textDecoration: 'none'
    }
    return (
        <div>
            <style>
                {
                    `
                        ol {
                            display:flex;
                            flex-direction:column;
                            justify-content:center;
                            align-items:center;
                        }
                    `
                }
            </style>
            <ol style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to="/"></Link>
                <Link to="/find_districts" style={linkTag}><li>Find districts</li></Link>
                <Link to="/background_color_change" style={linkTag}><li>Background color change</li></Link>
                <Link to="/sorting" style={linkTag}><li>Sorting</li></Link>
                <Link to="/slideshow" style={linkTag}><li>Slideshow</li></Link>
            </ol>
        </div>
    )
}

export default Home
