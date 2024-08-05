import React, { useState } from 'react'
const slides = [
    {
        "title": "Introduction",
        "content": "Welcome to our presentation on the exciting world of technology!"
    },
    {
        "title": "Innovation",
        "content": "Discover the latest breakthroughs that are shaping our future."
    },
    {
        "title": "Conclusion",
        "content": "Thank you for joining us. Let's continue to innovate together!"
    }
];
function Slideshow() {
    const [index, setIndex] = useState(0)
    const button = {
        padding: '10px',
        backgroundColor: 'initial',
        marginRight: '20px'
    }
    return (
        <center >
            <button onClick={() => { setIndex(0) }} disabled={index === 0} style={button}>Restart</button>
            <button onClick={() => { setIndex(index - 1) }} disabled={index === 0} style={button}>Prev</button>
            <button onClick={() => { setIndex(index + 1) }} disabled={index === slides.length - 1} style={button}>Next</button>
            <h1>{slides[index].title}</h1>
            <h3>{slides[index].content}</h3>
        </center>
    )
}

export default Slideshow
