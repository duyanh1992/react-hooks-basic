import React, { useState } from 'react';

function randomColor() {
    const arr = ['deeppink', 'red', 'blue', 'purple', 'yellow'];

    return arr[Math.trunc(Math.random() * 5)];
}

function ColorBox() {
    const [bgColor, setBgColor] = useState(() => {
        return localStorage.getItem('bg_color_box') || 'blue';
    });

    function handleBoxColorClick() {
        const newColor = randomColor();
        setBgColor(newColor);
        localStorage.setItem('bg_color_box', newColor);
    }

    return (
        <div
            name="color-box"
            style={{ backgroundColor: bgColor }}
            onClick={handleBoxColorClick}
        >
            Color Box
        </div>
    );
}

export default ColorBox;