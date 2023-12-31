import Image from "next/image";
import React from "react";
import Logo from "../components/assets/images/footer.png";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const usefulLink = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Media", path: "/media" },
    { name: "Contact us", path: "/contact" },
  ];
  return (
    <div className="container">
      <div className="row pt-20 pb-4">
        <div className="col-md-4 mb-4">
          <Image src={Logo} alt="Planet Khan Logo" width={140} height={140} />
          <div className="my-8 text-sm text-gray-300">
            At Planet Kan Multimedia, we're passionate about the boundless
            possibilities that multimedia offers. We specialize in harnessing
            the power of technology, design, and storytelling to create
            immersive, impactful experiences that captivate audiences across
            various mediums.
          </div>
          <Link href="/about" className="font-semibold !text-gray-300">
            <span className="!text-gray-300" aria-hidden="true" />
            Read More <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <h4 className="text-brand-gold mb-9 text-left font-serif">
            Useful links
          </h4>
          <div className="text-sm">
            <ul className="md:p-0 px-3" style={{ paddingLeft: 25 }}>
              {usefulLink.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-left mb-3 hover:text-white text-gray-300"
                  >
                    <Link href={item.path} className="no-underline">
                      - {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <h4 className="text-brand-gold mb-9 text-left font-serif">
            Contact Us
          </h4>
          <div className="text-gray-300 text-sm text-left mb-4">
            <a href="tel:+2348067749483" className="flex gap-2 items-center">
              <PhoneIcon className="w-7 h-7 text-brand-gold" />{" "}
              <span className="text-base">+234 806 774 9483</span>
            </a>
          </div>
          <div className="text-gray-300 text-sm text-left mb-4">
            <a
              href="mailto:planetkhan@gmail.com"
              className="flex gap-2 items-center"
            >
              <EnvelopeIcon className="w-7 h-7 text-brand-gold" />{" "}
              <span className="text-base">planetkhan@gmail.com</span>
            </a>
          </div>
          <div className="text-gray-300 text-sm text-left mb-4 flex gap-5">
            <a href="https://facebook.com" target="_blank">
              <FaFacebook className="w-8 h-8 text-brand-gold" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram className="w-8 h-8 text-brand-gold" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter className="w-8 h-8 text-brand-gold" />
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-1 border-brand-gold pt-4 border-t-2 text-gray-300">
          Copyrights © {new Date().getFullYear()} || All Rights Reserved by
          <span className="text-brand-orange"> Planet Khan Multimedia</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
