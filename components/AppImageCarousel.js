import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function AppImageCarousel({ images, name }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full min-w-0"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {images &&
            images.map((image, index) => {
              if (image.video) {
                return (
                  <CarouselItem key={index}>
                    <iframe
                      src={image.src}
                      allow="autoplay"
                      className={`rounded-md w-full aspect-video`}
                    />
                  </CarouselItem>
                );
              } else {
                if (name === "Newsquest") {
                  return (
                    <CarouselItem
                      key={index}
                      className="w-full flex justify-center"
                    >
                      <Image
                        src={image}
                        quality={100}
                        className="rounded-md max-h-96 w-full object-scale-down"
                      />
                    </CarouselItem>
                  );
                } else {
                  return (
                    <CarouselItem key={index}>
                      <Image
                        src={image}
                        className="rounded-md"
                      />
                    </CarouselItem>
                  );
                }
              }

              // <CarouselItem
              //   key={index}
              //   className="w-full flex justify-center"
              // >
              //   <Image
              //     src={image}
              //     className="rounded-md max-h-96 w-full object-scale-down"
              //   />
              // </CarouselItem>;
            })}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselPrevious />
        </div>
        <div className="hidden lg:block">
          <CarouselNext />
        </div>
      </Carousel>
      <div className="py-2 text-center text-sm text-gray-500">
        Slide {current} of {count}{" "}
        <div className="inline md:hidden">
          (swipe on mobile)
        </div>
      </div>
    </>
  );
}
