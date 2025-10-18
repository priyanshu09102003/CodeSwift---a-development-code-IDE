"use client";


import React, { useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP , ScrollTrigger)


type FadeInProps = {
    children: React.ReactNode;
    vars?: gsap.TweenVars;
    start?: string;
    end?: string;
    className?: string;
    targetChildren?: boolean;
}

export function FadeIn({children, 
    className, 
    start = "top 80%",
    end = "top 20%",
    targetChildren = false, 
    vars = {}
}: FadeInProps){

    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const target = targetChildren ? containerRef.current?.children : containerRef.current;

        if(!target) return;

        gsap.set(target, {
            opacity: 0,
            y: 60
        })

        gsap.to(target, {
            duration: 0.8,
            opacity: 1,
            ease: "power3.out",
            y: 0,
            stagger: 0.2,
            ...vars,
            scrollTrigger:{
                trigger: containerRef.current,
                start,
                end,
                toggleActions: "play reverse play reverse",
                scrub: 1
            }
        })
    })

    return(
        <div ref={containerRef} className={clsx(className)}>
            {children}
        </div>
    )
}