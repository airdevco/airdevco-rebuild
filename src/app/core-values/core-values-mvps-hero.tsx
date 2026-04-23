"use client";

import { Button } from "@/components/ui/button";
import { ReactNode, useEffect, useState } from "react";
import Lottie from "lottie-react";

// Fork of `components/landing/hero.tsx` for /core-values only — edit here without affecting /mvps.

const lottieStyles = `
  .lottie-animation-container {
    transform-origin: center center;
  }
  @media (min-width: 1024px) {
    .lottie-animation-container {
      transform-origin: left center;
    }
  }
`;

interface CoreValuesMvpsHeroProps {
  title?: string | ReactNode;
  description?: string;
  showImages?: boolean;
  showButton?: boolean;
  buttonText?: string;
  titleMaxWidth?: string;
  alignLeft?: boolean;
  rightImage?: string;
  lottieAnimation?: string;
  useOriginalImageSize?: boolean;
  imageHeight?: string;
  label?: string;
  centerText?: boolean;
}

export const CoreValuesMvpsHero = ({
  title = "A better way to launch your product",
  description = "We use the latest in AI and visual development to build world-class software in a fraction of time and cost of conventional agencies.",
  showImages = true,
  showButton = false,
  buttonText = "Talk to us",
  titleMaxWidth = "100%",
  alignLeft = false,
  rightImage,
  lottieAnimation,
  useOriginalImageSize = false,
  imageHeight,
  label,
  centerText = false,
}: CoreValuesMvpsHeroProps = {}) => {
  const LottiePlayer = ({ src }: { src: string }) => {
    const [animationData, setAnimationData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (src.endsWith(".lottie")) {
        import("jszip")
          .then((JSZip) => {
            fetch(src)
              .then((res) => res.arrayBuffer())
              .then((buffer) => JSZip.default.loadAsync(buffer))
              .then((zip) => {
                const jsonFile = Object.keys(zip.files).find(
                  (name) => name.endsWith(".json") && !name.includes("manifest"),
                );
                if (!jsonFile) {
                  setLoading(false);
                  return null;
                }

                return zip.files[jsonFile].async("string").then((jsonString) => {
                  const data = JSON.parse(jsonString);

                  const imagePromises: Promise<void>[] = [];
                  const imageMap: { [key: string]: string } = {};

                  Object.keys(zip.files).forEach((fileName) => {
                    if (
                      fileName.startsWith("images/") &&
                      (fileName.endsWith(".png") ||
                        fileName.endsWith(".jpg") ||
                        fileName.endsWith(".jpeg"))
                    ) {
                      const imageName = fileName.split("/").pop() || fileName;
                      imagePromises.push(
                        zip.files[fileName].async("blob").then((blob) => {
                          return new Promise<void>((resolve) => {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              imageMap[imageName] = reader.result as string;
                              resolve();
                            };
                            reader.readAsDataURL(blob);
                          });
                        }),
                      );
                    }
                  });

                  return Promise.all(imagePromises).then(() => {
                    const updateAssets = (assets: any[]) => {
                      if (!assets) return;
                      assets.forEach((asset: any) => {
                        if (asset.p && imageMap[asset.p]) {
                          asset.p = imageMap[asset.p];
                        }
                      });
                    };

                    if (data.assets) {
                      updateAssets(data.assets);
                    }

                    setAnimationData(data);
                    setLoading(false);
                  });
                });
              })
              .catch(() => {
                setLoading(false);
              });
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        fetch(src)
          .then((res) => res.json())
          .then((data) => {
            setAnimationData(data);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      }
    }, [src]);

    if (loading) {
      return <div style={{ width: "100%", height: "100%", minHeight: "400px" }} />;
    }

    if (!animationData) {
      return <div style={{ width: "100%", height: "100%", minHeight: "400px" }} />;
    }

    return (
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
      />
    );
  };

  if (alignLeft && (rightImage || lottieAnimation)) {
    return (
      <>
        <style>{lottieStyles}</style>
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-visible">
          <div className="relative z-10 max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
              <div className="text-left min-w-0">
                <h1
                  className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] font-semibold tracking-[-0.03em] text-gray-900 mb-6 lg:mb-8"
                  style={{ maxWidth: titleMaxWidth }}
                >
                  {title}
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-2xl">
                  {description}
                </p>

                {showButton && (
                  <div className="mt-6 lg:mt-8">
                    <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
                      {buttonText}
                    </Button>
                  </div>
                )}

                {showImages && (
                  <div className="mt-8 mb-12 flex items-center gap-8">
                    <img
                      src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66969187efb02a2bec53fa5e_bubble.webp"
                      alt="Badge"
                      className="h-16 w-auto"
                    />
                    <div className="h-4 w-px" style={{ backgroundColor: "#E2E8F0" }} />
                    <img
                      src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0c3731de254210406f2e4_star-rating.png"
                      alt="Star Rating"
                      className="h-16 w-auto"
                    />
                  </div>
                )}
              </div>

              <div
                className="relative mt-8 lg:mt-0 w-full min-w-0 flex items-center justify-center lg:justify-center"
                style={imageHeight ? { minHeight: imageHeight } : undefined}
              >
                {lottieAnimation ? (
                  <div
                    className={`${useOriginalImageSize ? "w-full max-w-md lg:max-w-full" : "w-full max-w-md lg:max-w-full"} lottie-animation-container`}
                    style={{
                      transform: "scale(1.05)",
                    }}
                  >
                    <LottiePlayer src={lottieAnimation} />
                  </div>
                ) : rightImage ? (
                  <img
                    src={rightImage}
                    alt="Hero"
                    className={
                      useOriginalImageSize
                        ? "w-full h-auto max-h-[min(72vh,720px)] object-contain rounded-2xl border"
                        : "w-full h-auto object-contain rounded-2xl border"
                    }
                    style={{
                      boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
                      borderColor: "hsl(var(--border))",
                    }}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-full max-w-[1500px] h-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            top: "calc(40% + 20px)",
            backgroundImage:
              "url(https://framerusercontent.com/images/qDrnphZImHJ0Ev3PBEtSsuAKiw.png?width=2160&height=736)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            maskImage: "radial-gradient(circle at center, black 50%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 80%)",
            opacity: 0.8,
          }}
        />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className={centerText ? "text-center" : "text-left"}>
            {label && (
              <h3 className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3">
                {label}
              </h3>
            )}
            <h1
              className={`text-[56px] lg:text-[80px] leading-[1.05] font-semibold tracking-[-0.03em] text-gray-900 mb-8 ${centerText ? "mx-auto" : ""}`}
              style={{ maxWidth: titleMaxWidth }}
            >
              {title}
            </h1>

            <p
              className={`text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl ${centerText ? "mx-auto" : ""}`}
            >
              {description}
            </p>

            {showImages && (
              <div className="mt-8 mb-12 flex items-center justify-center gap-8">
                <img
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66969187efb02a2bec53fa5e_bubble.webp"
                  alt="Badge"
                  className="h-16 w-auto"
                />
                <div className="h-4 w-px" style={{ backgroundColor: "#E2E8F0" }} />
                <img
                  src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0c3731de254210406f2e4_star-rating.png"
                  alt="Star Rating"
                  className="h-16 w-auto"
                />
              </div>
            )}

            {showButton && (
              <div className="mt-8">
                <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
