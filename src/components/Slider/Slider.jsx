import React, { useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./Slider.scss";

const Slider = () => {
    const data = [
      "https://static.massimodutti.net/3/cms/assets/uploads/wEditDesktopRemakeTheWay17_1.jpg?impolicy=massimodutti-itxmediumhigh&imwidth=2300&imformat=chrome",
      "https://static.massimodutti.net/3/cms/assets/uploads/wEditDesktopRemakeTheWay07_1.jpg?impolicy=massimodutti-itxmediumhigh&imwidth=2300&imformat=chrome",
      "https://static.massimodutti.net/3/cms/assets/uploads/wEditDesktopRemakeTheWay18_1.jpg?impolicy=massimodutti-itxmediumhigh&imwidth=2300&imformat=chrome",
      ];

      const [currentSlide, setCurrentSlide] = useState(0);

      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
      };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
      };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
                <ArrowLeftIcon/>
                </div>
        <div className="icon" onClick={nextSlide}>
                <ArrowRightIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider