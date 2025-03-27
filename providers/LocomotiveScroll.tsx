"use client";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let locomotiveScroll: any;

    // Only run on client side
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);

      import("locomotive-scroll").then((LocomotiveScrollModule) => {
        const LocomotiveScrollLib = LocomotiveScrollModule.default;

        if (scrollRef.current) {
          locomotiveScroll = new LocomotiveScrollLib({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            class: "is-revealed",
            lerp: 0.1,
          });
        }
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
