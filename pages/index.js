import Header from "@/components/Headers";
import Link from "next/link";
import {
  LockClosedIcon,
  StarIcon,
  ChartBarIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import Banner from "../components/assets/images/camera.jpg";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
import { useInView } from "react-intersection-observer";

const features = [
  {
    name: "Timelessness of Quality:",
    description:
      "Planet Kan Multimedia stands at the forefront of delivering designs and marketing solutions that transcend trends. Our commitment to timelessness ensures that every project reflects enduring quality, making a lasting impact on the audience.",
    icon: StarIcon,
  },
  {
    name: "Reliability:",
    description:
      "Clients can depend on Planet Kan Multimedia for consistent, dependable, and professional services. Our team prides itself on meeting deadlines, exceeding expectations, and maintaining open communication throughout the creative process.",
    icon: LockClosedIcon,
  },
  {
    name: "World-Class Creativity:",
    description:
      "With a team of seasoned professionals, Planet Kan Multimedia is dedicated to pushing the boundaries of creativity. We bring global standards to every project, ensuring that our clients receive world-class designs and marketing strategies that set them apart.",
    icon: MapIcon,
  },
  {
    name: "Value for Investment:",
    description:
      "We understand the importance of a return on investment. Planet Kan Multimedia strives to provide exceptional value for every client's budget, offering cost-effective solutions without compromising on quality. Our goal is to not just meet expectations but to exceed them, ensuring every investment yields significant returns.",
    icon: ChartBarIcon,
  },
];

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className={`bg-brand-black ${montserrat.className}`}>
      <Header />
      <main className="overflow-hidden">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center relative">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl puff-in-hor">
                Planet Kan{" "}
                <span className="animate-pulse text-brand-gold">
                  Multimedia
                </span>
              </h1>
              <div className="absolute right-[76px]">
                <svg
                  className="md:w-[220px] md:h-[24px] w-[180px] h-[10px]"
                  viewBox="0 0 220 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                    fill="#E07C0F"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>

              <p className="my-7 md:my-8 md:text-xl text-base leading-8 text-white slide-in-right">
                Where Dreams Live.
              </p>
              <div className="flex items-center justify-center gap-x-6 slide-in-left">
                <div className="sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-brand-orange ring-1 glow ring-brand-orange hover:ring-gray-900/20">
                    <Link href="/about" className="font-semibold">
                      <span aria-hidden="true" />
                      Get Started <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={ref} className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div
                className={`lg:pr-8 lg:pt-4 ${
                  inView ? "slide-in-bottom opacity-100" : "opacity-0"
                }`}
              >
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-brand-orange">
                    Planet Khan Multimedia
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Brand Values
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Planet Kan Multimedia is a dynamic and innovative multimedia
                    agency dedicated to providing top-tier design and marketing
                    solutions. With a commitment to excellence, the brand is
                    synonymous with timeless quality, reliability, world-class
                    creativity, and unbeatable value for investment.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-brand-orange"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <Image
                ref={ref}
                src={Banner}
                alt="Product screenshot"
                className={`md:block hidden w-[48rem] h-[1100px] object-cover max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 ${
                  inView ? "slide-in-right opacity-100" : "opacity-0"
                }`}
                width={2432}
                height={400}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
