"use client"


import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, SplitText ,ScrollTrigger)

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)" , () => {
      const split = SplitText.create(".hero-heading" , {
        type: "chars,lines",
        mask: "lines",
        linesClass: "line++",
      })

      const tl = gsap.timeline({delay: 4.8})

      tl.from(split.chars, {
        opacity: 0,
        y: -120,
        ease: "back",
        duration: 0.4,
        stagger: 0.07
      }).to(".hero-body",
       { opacity: 1,
        duration: 0.6,
        ease: "power2.out"
       }

      );

      gsap.fromTo(".hero-scene", {
        background: "linear-gradient(to bottom, #000000, #0f172a, #062f4a, #7fa0b9)"
      } , {
        background: "linear-gradient(to bottom, #ffffff, #ffffff, #ffffff, #ffffff)",
         scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "50% bottom",
          scrub: 1
        }
      })


    });

    
  })


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-white relative h-dvh text-shadow-black/30 text-shadow-lg  hero motion-safe:h-[300vh]"
    >

      <div className="hero-scene sticky pointer-events-none top-0 h-dvh w-full">
        
        <Canvas shadows = "soft">
          <Scene />
        </Canvas>

      </div>

      <div className="hero-content absolute inset-x-0 top-0 h-dvh">

        <Bounded fullWidth className="absolute top-18 inset-x-0 md:top-24 md:left-[8vw]">
        
            <PrismicRichText field={slice.primary.heading} components={{
              heading1: ({children}) => (
                <h1 className = "hero-heading font-black-slanted text-6xl leading-[0.8] uppercase sm:text-7xl lg:text-8xl">
                  {children}
                </h1>
              )
            }} />

        </Bounded>


        
        <Bounded fullWidth
        className="hero-body absolute bottom-0 inset-x-0 md:right-[8vw] md:left-auto opacity-0"
        innerClassName="flex flex-col gap-3"
        >
          <div className="max-w-md">
                <PrismicRichText field={slice.primary.body}
                components={{
                  heading2: ({children}) => (
                    <h2 className="font-bold-slanted mb-2 text-3xl uppercase lg:mb-3 lg:text-5xl">
                      {children}
                    </h2>
                  )
                }}
                />
            </div>
       


            <a href="#">
                <button className="font-bold-slanted flex w-fit cursor-pointer items-center gap-1 rounded bg-[#01A7E1] px-3 py-1 text-2xl uppercase transition group shadow-[0_8px_16px_rgba(0,0,0,0.3)]">
                  {slice.primary.code_playground}

                  <span className="group-hover:translate-x-1 transition">{">"}</span>
                </button>
            </a>
         </Bounded>
      </div>
    </section>
  );
};

export default Hero;
