import React, { useState } from "react";
import "./css/style.css";
function Slider() {
  const [v1, setv1] = useState(0);
  const [v2, setv2] = useState(10000000);
  const slide1 = (event) => {
    setv1(parseInt(event.target.value));
  };
  const slide2 = (event) => {
    setv2(parseInt(event.target.value));
  };

  return (
    <>
      <div className="wrapper">
        <div className="price-value">
          price range
          <div>
            {(() => {
              if (v2 >= 10000000) {
                return (
                  <>
                    <span>{v1}</span>
                    <span> - </span>
                    <span>{v2 / 10000000 + "cr"}</span>
                    <br />
                    <span> diff = {v2 - v1}</span>
                  </>
                );
              } else if (v2 >= 100000 && v2 < 100000000) {
                return (
                  <>
                    <span>{v1}</span>
                    <span>-</span>
                    <span>{v2 / 100000 + "L"}</span>
                    <br />
                    <span> diff = {v2 - v1}</span>
                  </>
                );
              } else {
                return (
                  <>
                    <span>{v1}</span>
                    <span>-</span>
                    <span>{v2}</span>
                    <br />
                    <span> diff = {v2 - v1}</span>
                  </>
                );
              }
            })()}
            {/* {v2%10000000===0}
          <>
          <span>{v1}</span>
            <span>-</span>
            <span>{v2/10000000+"cr"}</span>
          </> */}
            {/* {v2%100000>=0 && v2<10000000?
          <>
            <span>{v1}</span>
            <span>-</span>
            <span>{v2/100000+"L"}</span>
          </>:
        
          <>
          <span>{v1}</span>
            <span>-</span>
            <span>{v2}</span></>
          
      } */}
          </div>
        </div>

        <div className="slider-wrapper">
          <div class="slider-track"></div>

          <input
            type="range"
            min={0}
            max={10000000}
            step={1}
            defaultvalue={v1}
            onChange={slide1}
          ></input>
          <input
            type="range"
            min={0}
            max={10000000}
            step={1}
            defaultvalue={v2}
            onChange={slide2}
          ></input>
        </div>
      </div>
    </>
  );
}
export default Slider;
