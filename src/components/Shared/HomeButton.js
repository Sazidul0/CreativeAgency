import React from 'react';

const HomeButton = ({ value }) => {
    return (
        <div>
            <button
                style={{
                    backgroundColor: 'black',
                    color: "white",
                    borderRadius: '6px',
                    padding: '8px 50px',
                    fontWeight: '600'
                }}
                class=""
            >{value}</button>
        </div>
    );
};

export default HomeButton;