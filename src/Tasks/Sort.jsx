import React, { useState } from 'react'
const articles = [
    { title: "Understanding ES6 Features", number: "431", date: "2024-08-01" },
    { title: "Asynchronous Programming in JS", number: "2", date: "2024-08-02" },
    { title: "JavaScript Design Patterns", number: "43", date: "2024-08-03" },
    { title: "Functional Programming in JS", number: "874", date: "2024-08-04" },
    { title: "What's New in Node.js", number: "35", date: "2024-08-05" },
    { title: "Exploring React Hooks", number: "6", date: "2024-08-06" },
    { title: "TypeScript: Pros and Cons", number: "437", date: "2024-08-07" },
    { title: "Building Progressive Web Apps", number: "438", date: "2024-08-08" },
    { title: "State Management in Vue.js", number: "39", date: "2024-08-09" },
    { title: "Testing JavaScript with Jest", number: "103", date: "2024-08-10" }
];
function Sort() {
    const [data, setData] = useState(articles)
    const [isClicked, setIsClicked] = useState(null)
    const sortByNumberAscending = (value) => {
        const copy = [...articles]
        const sortedData = copy.sort((a, b) => a.number - b.number)
        setData(sortedData)
        setIsClicked(value)
    }
    const sortByNumberDescending = (value) => {
        const copy = [...articles]
        const sortedData = copy.sort((a, b) => b.number - a.number)
        setData(sortedData)
        setIsClicked(value)
    }
    const sortByDateAscending = (value) => {
        const copy = [...articles]
        const sortedData = copy.sort((a, b) => new Date(a.date) - new Date(b.date))
        setData(sortedData);
        setIsClicked(value)
    }
    const sortByDateDescending = (value) => {
        const copy = [...articles]
        const sortedData = copy.sort((a, b) => new Date(b.date) - new Date(a.date))
        setData(sortedData);
        setIsClicked(value)
    }
    return (
        <React.Fragment>
            <style>
                {
                    `
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th,td {
                            border: 1px solid black;
                            padding:10px;
                        }
                        table thead tr th:nth-child(odd){
                            background-color:grey;
                        }
                        table tbody tr td:nth-child(even){
                            background-color:grey;
                        }
                        .one {
                            background-color: ${isClicked === 1 ? 'green' : 'initial'};
                        }
                        .two {
                             background-color: ${isClicked === 2 ? 'green' : 'initial'};
                        }
                        .three {
                            background-color: ${isClicked === 3 ? 'green' : 'initial'};
                        }
                        .four {
                             background-color: ${isClicked === 4 ? 'green' : 'initial'};
                        }
                    `
                }
            </style>
            <table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th><button onClick={() => { sortByNumberAscending(1) }} className={isClicked === 1 ? 'one' : ''}>Number By Ascending</button><button onClick={() => { sortByNumberDescending(2) }} className={isClicked === 2 ? 'two' : ''}>Number By Descending</button></th>
                        <th><button onClick={() => { sortByDateAscending(3) }} className={isClicked === 3 ? 'three' : ''}>Date By Ascending</button><button onClick={() => { sortByDateDescending(4) }} className={isClicked === 4 ? 'four' : ''}>Date By Descending</button></th>
                    </tr>
                </thead>
                {
                    data.map((value, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td><center>{value.title}</center></td>
                                    <td><center>{value.number}</center></td>
                                    <td><center>{value.date}</center></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </React.Fragment>
    )
}

export default Sort
