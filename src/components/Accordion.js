import React, { useState } from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClicked = (index) => {
        //console.log('Title Clicked', index);
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui container styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    );
};

export default Accordion;

