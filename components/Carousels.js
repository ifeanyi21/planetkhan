import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <p className="text-lg">
          <span className="text-brand-orange">Visionary Team:</span> Our diverse
          team of experts brings a wealth of experience and creativity to the
          table, ensuring innovative solutions for every project.
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <p className="text-lg">
          <span className="text-brand-orange">Tailored Solutions:</span> We
          understand that every client is unique. Our solutions are customized
          to meet your specific needs and objectives.
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <p className="text-lg">
          <span className="text-brand-orange">Quality & Excellence:</span> We're
          dedicated to delivering top-notch quality in every project, focusing
          on attention to detail and excellence in execution.
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <p className="text-lg">
          <span className="text-brand-orange">Client-Centric Approach:</span>{" "}
          Your success is our priority. We value transparency, communication,
          and building strong partnerships with our clients.
        </p>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
