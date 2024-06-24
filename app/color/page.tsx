'use client';

import React, { useState } from 'react';

const initialColors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00',
    '#FF00FF', '#00FFFF', '#000000', '#FFFFFF'
];

const ColorPalette = () => {
    const [colors, setColors] = useState<string[]>(initialColors);
    const [draggedColor, setDraggedColor] = useState<string | null>(null);

    const handleColorChange = (index: number, color: string) => {
        const newColors = [...colors];
        newColors[index] = color;
        setColors(newColors);
    };

    const handleDragStart = (color: string) => {
        setDraggedColor(color);
    };

    const handleDrop = (index: number) => {
        if (draggedColor) {
            const newColors = colors.filter((col) => col !== draggedColor);
            newColors.splice(index, 0, draggedColor);
            setColors(newColors);
            setDraggedColor(null);
        }
    };

    return (
        <div className="p-10">
            <h1 className="text-2xl mb-4">Color Palette</h1>
            <div className="grid grid-cols-4 gap-4">
                {colors.map((color, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <label htmlFor='color' >Color</label> 
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => handleColorChange(index, e.target.value)}
                            className="w-16 h-16 mb-2"
                        />
                        <div
                            draggable
                            onDragStart={() => handleDragStart(color)}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDrop(index)}
                            className="w-16 h-16 rounded-full border border-black"
                            style={{ backgroundColor: color }}
                            
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;
