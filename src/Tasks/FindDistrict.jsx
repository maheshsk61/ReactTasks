import React, { useState } from "react";
export default function FindDistrict() {
    var districts = [
        "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore",
        "Cuddalore", "Dharmapuri", "Dindigul", "Erode",
        "Kallakurichi", "Kanchipuram", "Kanyakumari",
        "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai",
        "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur",
        "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem",
        "Sivagangai", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi",
        "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur",
        "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
        "Viluppuram", "Virudhunagar"
    ];
    const [search, setSearch] = useState('')
    const filteredDistricts = search ? districts.filter((f) => f.toUpperCase().includes(search.toUpperCase())) : districts
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
            <input type="search" placeholder="Search Districts" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <ol>
                {
                    filteredDistricts.length ? filteredDistricts.map((district, index) => {
                        return (
                            <li key={index}>{district}</li>
                        )
                    }) : <h1>No Districts Found!</h1>
                }
            </ol>
        </div>
    )
}
