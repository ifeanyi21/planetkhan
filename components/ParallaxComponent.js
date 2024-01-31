import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const ParallaxComponent = ({ children }) => {
  return (
    <ParallaxProvider>
      <Parallax scale={[0.8, 1.3, "easeInQuad"]} speed={10} tagouter="figure">
        {children}
      </Parallax>
    </ParallaxProvider>
  );
};

export default ParallaxComponent;
