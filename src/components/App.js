import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";
import Slide from "./Slide";

const App = (props) => {
    const { slides } = props;
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlideShow = () => {
        if (currentSlide === 0) return;
        setCurrentSlide(currentSlide - 1);
    };
    const nextSlideShow = () => {
        document.querySelector("[data-testid='button-restart']").disabled = false;
        if (currentSlide === slides.length - 1) return;
        setCurrentSlide(currentSlide + 1);
    };
    const restartSlideShow = () => {
        setCurrentSlide(0);
    };

    useEffect(() => {
        if (currentSlide === 0) {
            document.querySelector("[data-testid='button-prev']").disabled = true;
            document.querySelector("[data-testid='button-restart']").disabled = true;
        } else {
            document.querySelector("[data-testid='button-prev']").disabled = false;
        }
        if (currentSlide === slides.length - 1) {
            document.querySelector("[data-testid='button-next']").disabled = true;
        } else {
            document.querySelector("[data-testid='button-next']").disabled = false;
        }
    });

    return (
        <div className="App">
            <div id="navigation">
                <button onClick={prevSlideShow} data-testid="button-prev">
                    {"Prev"}
                </button>
                <button onClick={restartSlideShow} data-testid="button-restart">
                    {"Restart"}
                </button>
                <button onClick={nextSlideShow} data-testid="button-next">
                    {"Next"}
                </button>
            </div>
            <Slide slide={slides[currentSlide]} />
        </div>
    );
};

export default App;
