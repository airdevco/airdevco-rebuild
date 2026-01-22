import { Navbar, Footer } from "@/components/landing";

const CoreValues = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <section className="py-24">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
                  Core Values
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Content coming soon.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CoreValues;



