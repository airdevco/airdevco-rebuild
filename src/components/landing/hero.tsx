import { Button } from "@/components/ui/button";
import { ReactNode, useEffect, useState } from "react";
import Lottie from "lottie-react";
import JSZipLib from "jszip";

// Add CSS for responsive transform origin
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

interface HeroProps {
  title?: string | ReactNode;
  description?: string;
  showImages?: boolean;
  showButton?: boolean;
  buttonText?: string;
  titleMaxWidth?: string;
  /** When set (alignLeft hero), replaces default `max-w-2xl` on the description paragraph. */
  descriptionMaxWidth?: string;
  alignLeft?: boolean;
  rightImage?: string;
  lottieAnimation?: string;
  useOriginalImageSize?: boolean;
  imageHeight?: string;
  label?: string;
  centerText?: boolean;
  /** When set, primary CTA renders as a link (e.g. portal). */
  buttonHref?: string;
  /** Right-side hero image: no border/shadow; capped width scales up at sm/lg (align-left + rightImage only). */
  rightImagePlain?: boolean;
}

/** Module-level so React does not remount on every Hero render (was causing freezes / jank). */
function HeroLottiePlayer({ src }: { src: string }) {
  const [animationData, setAnimationData] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fail = () => {
      if (!cancelled) setLoading(false);
    };

    if (src.endsWith(".lottie")) {
      // JSZip is already imported at module level — fetch and parse immediately.
      fetch(src)
        .then((res) => res.arrayBuffer())
        .then((buffer) => {
          if (cancelled) return null;
          return JSZipLib.loadAsync(buffer);
        })
        .then((zip) => {
          if (cancelled || !zip) return null;

          const jsonFile = Object.keys(zip.files).find(
            (name) => name.endsWith(".json") && !name.includes("manifest")
          );
          if (!jsonFile) {
            fail();
            return null;
          }

          return zip.files[jsonFile].async("string").then((jsonString) => {
            if (cancelled) return null;
            const data = JSON.parse(jsonString) as { assets?: unknown[] };

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
                  })
                );
              }
            });

            return Promise.all(imagePromises).then(() => {
              if (cancelled) return;
              const updateAssets = (assets: { p?: string }[]) => {
                if (!assets) return;
                assets.forEach((asset) => {
                  if (asset.p && imageMap[asset.p]) {
                    asset.p = imageMap[asset.p];
                  }
                });
              };

              if (data.assets) {
                updateAssets(data.assets as { p?: string }[]);
              }

              setAnimationData(data);
              setLoading(false);
            });
          });
        })
        .catch(fail);
    } else {
      fetch(src)
        .then((res) => res.json())
        .then((data) => {
          if (cancelled) return;
          setAnimationData(data);
          setLoading(false);
        })
        .catch(fail);
    }

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (loading) {
    return (
      <div
        className="w-full min-h-[400px] lg:min-h-[450px] rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 shadow-inner"
        aria-hidden
      >
        <div className="h-full w-full min-h-[400px] lg:min-h-[450px] animate-pulse rounded-2xl bg-slate-200/40" />
      </div>
    );
  }

  if (!animationData) {
    return (
      <div
        className="w-full min-h-[400px] lg:min-h-[450px] rounded-2xl border border-dashed border-slate-200 bg-slate-50"
        aria-hidden
      />
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export const Hero = ({ 
  title = "A better way to launch your product",
  description = "We use the latest in AI and visual development to build world-class software in a fraction of time and cost of conventional agencies.",
  showImages = true,
  showButton = false,
  buttonText = "Talk to us",
  titleMaxWidth = "100%",
  descriptionMaxWidth,
  alignLeft = false,
  rightImage,
  lottieAnimation,
  useOriginalImageSize = false,
  imageHeight,
  label,
  centerText = false,
  buttonHref,
  rightImagePlain = false,
}: HeroProps = {}) => {
  if (alignLeft && (rightImage || lottieAnimation)) {
    return (
      <>
        <style>{lottieStyles}</style>
        <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-16" style={{ overflow: "hidden" }}>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
            <div className="text-left">
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] font-semibold tracking-[-0.03em] text-gray-900 mb-6 lg:mb-8" style={{ maxWidth: titleMaxWidth }}>
                {title}
              </h1>
              
              <p
                className={`text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed ${descriptionMaxWidth ? "" : "max-w-2xl"}`}
                style={descriptionMaxWidth ? { maxWidth: descriptionMaxWidth } : undefined}
              >
                {description}
              </p>

              {showButton && (
                <div className="mt-6 lg:mt-8">
                  {buttonHref ? (
                    <a href={buttonHref} target="_blank" rel="noreferrer">
                      <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
                        {buttonText}
                      </Button>
                    </a>
                  ) : (
                    <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
                      {buttonText}
                    </Button>
                  )}
                </div>
              )}

              {showImages && (
                <div className="mt-8 mb-12 flex items-center gap-8">
                  <img 
                    src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66969187efb02a2bec53fa5e_bubble.webp" 
                    alt="Badge" 
                    className="h-16 w-auto"
                  />
                  <div className="h-4 w-px" style={{ backgroundColor: '#E2E8F0' }} />
                  <img 
                    src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0c3731de254210406f2e4_star-rating.png" 
                    alt="Star Rating" 
                    className="h-16 w-auto"
                  />
                </div>
              )}
            </div>
            
            <div
              className={`relative mt-8 lg:mt-0 lg:absolute lg:left-1/2 lg:ml-12 lg:top-1/2 lg:-translate-y-1/2 lg:flex lg:items-center lg:justify-start z-0 flex items-center justify-center lg:justify-start ${useOriginalImageSize ? "" : imageHeight ? "" : "lg:h-[450px]"}`}
              style={imageHeight ? { height: imageHeight } : {}}
            >
              {lottieAnimation ? (
                <div
                  className={`${useOriginalImageSize ? "w-full lg:w-auto overflow-hidden" : "w-full h-auto lg:h-full lg:w-auto overflow-hidden"} lottie-animation-container`}
                  style={{
                    maxWidth: "none",
                    transform: "scale(1.2)",
                  }}
                >
                  <HeroLottiePlayer src={lottieAnimation} />
                </div>
              ) : rightImage ? (
                rightImagePlain ? (
                  <img
                    src={rightImage}
                    alt="Airdev Flex experts"
                    className="w-full max-w-[min(100%,480px)] sm:max-w-[min(100%,520px)] lg:max-w-[min(100%,560px)] h-auto object-contain mx-auto lg:ml-0 lg:mr-auto"
                  />
                ) : (
                  <img
                    src={rightImage}
                    alt="Hero"
                    className={
                      useOriginalImageSize
                        ? "w-full max-w-full lg:w-auto lg:max-h-[600px] object-cover rounded-2xl border"
                        : "w-full h-auto lg:h-full lg:w-auto rounded-2xl border"
                    }
                    style={{
                      maxWidth: "none",
                      boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
                      borderColor: "hsl(var(--border))",
                    }}
                  />
                )
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
            top: 'calc(40% + 20px)',
            backgroundImage: 'url(https://framerusercontent.com/images/qDrnphZImHJ0Ev3PBEtSsuAKiw.png?width=2160&height=736)', 
            backgroundSize: 'contain', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            maskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 80%)',
            opacity: 0.8
          }} 
        />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className={centerText ? 'text-center' : 'text-left'}>
            {label && (
              <h3 className="text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3">
                {label}
              </h3>
            )}
            <h1 className={`text-[56px] lg:text-[80px] leading-[1.05] font-semibold tracking-[-0.03em] text-gray-900 mb-8 ${centerText ? 'mx-auto' : ''}`} style={{ maxWidth: titleMaxWidth }}>
              {title}
            </h1>
            
            <p className={`text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl ${centerText ? 'mx-auto' : ''}`}>
              {description}
            </p>

            {showImages && (
            <div className="mt-8 mb-12 flex items-center justify-center gap-8">
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/66969187efb02a2bec53fa5e_bubble.webp" 
                alt="Badge" 
                className="h-16 w-auto"
              />
              <div className="h-4 w-px" style={{ backgroundColor: '#E2E8F0' }} />
              <img 
                src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0c3731de254210406f2e4_star-rating.png" 
                alt="Star Rating" 
                className="h-16 w-auto"
              />
            </div>
            )}

            {showButton && (
              <div className="mt-8">
                {buttonHref ? (
                  <a href={buttonHref} target="_blank" rel="noreferrer">
                    <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
                      {buttonText}
                    </Button>
                  </a>
                ) : (
                  <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pb-2 pt-2.5 text-[16px] font-medium transition-all leading-none">
                    {buttonText}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
