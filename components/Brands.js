import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import Brand1 from "../components/assets/images/reform-logo.svg";
import Brand2 from "../components/assets/images/savvycal-logo.svg";
import Brand3 from "../components/assets/images/statamic-logo.svg";
import Brand4 from "../components/assets/images/transistor-logo.svg";
import Brand5 from "../components/assets/images/tuple-logo.svg";

export default class Brands extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 900,
      cssEase: "ease",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image src={Brand1} alt="Brand Logo" width={200} height={200} />
          </div>
          <div>
            <Image src={Brand2} alt="Brand Logo" width={200} height={200} />
          </div>
          <div>
            <Image src={Brand3} alt="Brand Logo" width={200} height={200} />
          </div>
          <div>
            <Image src={Brand4} alt="Brand Logo" width={200} height={200} />
          </div>
          <div>
            <Image src={Brand5} alt="Brand Logo" width={200} height={200} />
          </div>
          <div>
            <Image src={Brand1} alt="Brand Logo" width={200} height={200} />
          </div>
          <div>
            <Image src={Brand2} alt="Brand Logo" width={200} height={200} />
          </div>
          <div>
            <Image src={Brand3} alt="Brand Logo" width={200} height={200} />
          </div>
          <div>
            <Image src={Brand4} alt="Brand Logo" width={200} height={200} />
          </div>
          <div>
            <Image src={Brand5} alt="Brand Logo" width={200} height={200} />
          </div>
        </Slider>
      </div>
    );
  }
}
