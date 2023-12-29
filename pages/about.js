import React from "react";
import Header from "@/components/Headers";
import Carousels from "@/components/Carousels";
import { Card } from "react-bootstrap";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="bg-brand-black">
      <Header />
      <main>
        <div className="relative w-full overlay glow shadow-lg">
          <h1 className="absolute md:text-5xl text-2xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            Who we are
          </h1>
        </div>
        <div className="mt-8 text-gray-300 font-medium text-lg md:text-center text-left">
          <div className="container">
            <div className="my-16 text-center">
              At{" "}
              <span className="text-brand-orange font-bold">
                {" "}
                Planet Khan Multimedia
              </span>
              , we're passionate about the boundless possibilities that
              multimedia offers. We specialize in harnessing the power of
              technology, design, and storytelling to create immersive,
              impactful experiences that captivate audiences across various
              mediums.
            </div>
            <div className="text-3xl font-semibold mb-3 text-brand-orange">
              Our Story
            </div>
            <div className="mb-8 border-b border-brand-gold pb-10">
              Since our inception,{" "}
              <span className="text-brand-orange font-bold">
                {" "}
                Planet Khan Multimedia
              </span>{" "}
              has been a trailblazer in the world of multimedia. Founded on the
              belief that creativity knows no bounds, we've embarked on a
              journey to redefine how stories are told and experiences are
              crafted. Over the years, we've assembled a diverse team of
              visionaries, artists, tech enthusiasts, and strategists, each
              contributing their unique expertise to our collective mission.
            </div>
          </div>

          <div className="bg-white py-10">
            <div className="container">
              <div className="text-3xl font-bold mb-3 text-black">
                What we Do
              </div>
              <div className="row">
                <div className="col-md-4 p-2 mb-4">
                  <div className="cardGlass p-3 text-gray-900">
                    <span className="text-brand-orange font-semibold">
                      {" "}
                      Creative Multimedia Production:
                    </span>{" "}
                    From stunning visuals and animations to interactive
                    applications and virtual reality experiences, we're masters
                    at bringing ideas to life. Our talented team utilizes
                    cutting-edge tools and techniques to create captivating
                    multimedia content that resonates with audiences.
                  </div>
                </div>
                <div className="col-md-4 p-2 mb-4">
                  <div className="cardGlass p-3 text-gray-900">
                    <span className="text-brand-orange font-semibold">
                      Innovative Design Solutions:{" "}
                    </span>
                    Design is at the core of everything we do. Our design
                    wizards excel in crafting visually striking and user-centric
                    experiences across platforms, ensuring seamless integration
                    and engagement.
                  </div>
                </div>
                <div className="col-md-4 p-2 mb-4">
                  <div className="cardGlass p-3 text-gray-900">
                    <span className="text-brand-orange font-semibold">
                      Technology-driven Solutions:{" "}
                    </span>
                    Embracing the latest advancements in technology, we leverage
                    AI, AR, VR, and other emerging tech to push the boundaries
                    of multimedia, delivering unparalleled experiences that
                    leave a lasting impact.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row py-24">
              <div className="col-md-6 mb-4">
                <div className="text-xl font-semibold mt-8 mb-3 text-brand-orange">
                  Our Approach
                </div>
                <div className="my-8 pb-10 text-lg">
                  At{" "}
                  <span className="text-brand-orange font-bold">
                    {" "}
                    Planet Khan
                  </span>
                  , collaboration and innovation are ingrained in our DNA. We
                  believe in working closely with our clients, understanding
                  their objectives, and infusing our projects with creativity
                  and technical prowess. Whether it's a small-scale project or a
                  comprehensive multimedia campaign, we're committed to
                  delivering excellence.
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="text-xl font-semibold mt-8 mb-3 text-brand-orange">
                  Why Choose{" "}
                  <span className="text-brand-orange font-bold">
                    {" "}
                    Planet Khan
                  </span>
                </div>
                <div className="my-8 pb-10 text-lg">
                  <Carousels />
                </div>
              </div>
              <div className="border-brand-orange border-b pb-4">
                Join us in the realm of limitless possibilities. Let's
                collaborate and create multimedia experiences that resonate,
                inspire, and elevate your brand. Get in touch with{" "}
                <span className="text-brand-orange font-bold">
                  {" "}
                  Planet Khan Multimedia
                </span>{" "}
                today, and let's embark on a multimedia journey together!
              </div>
            </div>
            <div className="my-3">
              <div className="text-3xl font-bold !mb-8 text-brand-orange">
                Vision
              </div>
              <div className="row text-left mb-8 pb-16 text-sm">
                <div className="col-lg-3">
                  <Card className="mb-2 !bg-brand-gold w-full min-h-[280px] text-brand-black">
                    <Card.Body>
                      <Card.Text>
                        At Planet Kan, our vision is to redefine the landscape
                        of multimedia by empowering creativity without limits.
                        We envision a world where innovation, technology, and
                        storytelling converge seamlessly to create
                        transformative and immersive experiences that captivate,
                        inspire, and leave an indelible mark on audiences
                        worldwide.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card className="mb-2 !bg-brand-gold w-full min-h-[280px] text-brand-black">
                    <Card.Body>
                      <Card.Text>
                        Our commitment lies in pushing the boundaries of what's
                        possible, harnessing cutting-edge technology, and
                        fostering a culture of innovation. We aspire to be
                        pioneers in the industry, continuously exploring new
                        frontiers in multimedia, and setting benchmarks for
                        excellence.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card className="mb-2 !bg-brand-gold w-full min-h-[280px] text-brand-black">
                    <Card.Body>
                      <Card.Text>
                        Through our dedication to craftsmanship, creativity, and
                        collaboration, we aim to be the catalysts for change,
                        redefining how stories are told and experiences are
                        felt. Our vision is to be recognized as the premier
                        destination where imagination meets innovation, crafting
                        multimedia experiences that transcend expectations and
                        shape the future of digital engagement.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card className="mb-2 !bg-brand-gold w-full min-h-[280px] text-brand-black">
                    <Card.Body>
                      <Card.Text>
                        At Planet Kan, we strive to be the driving force behind
                        the evolution of multimedia, leaving an enduring legacy
                        of creativity, innovation, and unparalleled excellence.
                        This vision guides our every endeavor, fuels our
                        passion, and inspires us to continuously raise the bar
                        in the world of multimedia.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-8 py-16">
            <div className="md:text-xl container text-base font-semibold mb-16 text-brand-black mt-8">
              Trusted by the world’s most innovative teams
            </div>
            <Brands />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
