"use client";

import { useEffect, useRef } from "react";
import LocomotiveScrollLib from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let locomotiveScroll: any;

    if (scrollRef.current) {
      locomotiveScroll = new LocomotiveScrollLib({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
        lerp: 0.1,
      });
    }

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <main ref={scrollRef} data-scroll-container>
      {children}
    </main>
  );
};

export default LocomotiveScroll;
