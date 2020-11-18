import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Route from './Route';
import Header from './Header';

const items = [
    {
        title: 'What is React',
        content: "React is frontend Javascript framework"
    },
    {
        title: 'Why use React',
        content: "React is favourite JS libraray amoing Engineers"
    },
    {
        title: 'How to use React',
        content: "Use React by creating components"
    },
];


const options = [
    {
        label: 'The color Red',
        value: "Red"
    },
    {
        label: 'The color Green',
        value: "Green"
    },
    {
        label: 'The color Blue',
        value: "BLue"
    }
];

const App = () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="ui container">
            <Header></Header>
            <div>
                <Route path="/">
                    <Accordion items={items}></Accordion>
                </Route>
                <Route path="/list">
                    <Search></Search>
                </Route>
                <Route path="/dropdown">
                    <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
                    {showDropdown ?
                        <Dropdown selected={selected} onSelectedChange={setSelected} options={options}></Dropdown>
                        : null
                    }
                </Route>
            </div>


        </div>

    );
};

export default App;

