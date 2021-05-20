import React from "react";

export default function Slide({ slide }) {
    return (
        <div id="slide">
            <h1 data-testid="title">{slide.title}</h1>
            <p data-testid="text">{slide.text}</p>
        </div>
    );
}
