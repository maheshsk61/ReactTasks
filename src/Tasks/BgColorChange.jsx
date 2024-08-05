import React, { useState } from "react";
export default function BgColorChange() {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [bg, setBg] = useState(false);
    return (
        <div>
            {
                array.map((arr, index) => {
                    return (

                        <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                            <button style={{
                                background: bg === index ? 'green' : 'black', color: 'white', border:
                                    '1px solid white'
                            }} onClick={() => { setBg(index) }}><h4>{arr}</h4></button>
                        </div>
                    )
                })
            }
        </div>
    )
}