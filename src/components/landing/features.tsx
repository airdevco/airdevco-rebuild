export const Features = () => {
  const features = [
    {
      id: "01",
      title: "Connect your calendar",
      description: "We'll handle all the cross-referencing, so you don't have to worry about double bookings.",
      image: "https://49291ba917ced6f25ff01e5cc5b9a691.cdn.bubble.io/cdn-cgi/image/w=1024,h=671,f=auto,dpr=2,fit=contain/f1763054037361x139486763646640820/desktop%20%281%29.webp",
      realTitle: "Powerful no-code framework",
      realDesc: "Bubble is a visual programming language that lets us build 5x faster, while controlling every detail of design and functionality."
    },
    {
      id: "02",
      title: "Set your availability",
      description: "Want to block off weekends? Set up any buffers? We make that easy.",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764810280887x343083959278793100/ai%20%281%29.png",
      realTitle: "AI throughout our work",
      realDesc: "We integrate AI into various parts of our process to streamline it, as well as into the products that we build."
    },
    {
      id: "03",
      title: "Choose how to meet",
      description: "It could be a video chat, phone call, or a walk in the park!",
      image: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669977d23a2e5967e7a52575_img2.webp",
      realTitle: "Meticulous builders",
      realDesc: "Our rigorous multi-step selection process uses practical exercises to screen thousands of no-code candidates and find the top 1%."
    },
    {
      id: "04",
      title: "Obsessive quality standards",
      description: "We establish best-in-class resources, tools, and processes for every aspect of our work.",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764810615819x902272734823797000/cover3%20%281%29.jpg",
      realTitle: "Quality standards",
      realDesc: "We establish best-in-class resources, tools, and processes for every aspect of our work, to consistently deliver top-quality results."
    }
  ];

  return (
    <section className="py-32 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3">
            The Airdev difference
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6 max-w-2xl mx-auto">
            The new approach to building great products
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Combining cutting-edge technology with world-class expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-3xl p-[25.6px] border border-gray-200 shadow-sm flex flex-col h-full overflow-hidden relative">
              <div className="mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-gray-500 mb-6" style={{ fontFamily: "'Roboto Mono', monospace", backgroundColor: '#F4F4F4' }}>
                  {feature.id}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.realTitle}</h3>
                <p className="text-[16px] leading-relaxed text-gray-600">{feature.realDesc}</p>
              </div>
              
              {/* Image for card #3 */}
              {feature.id === "03" && (
                <div className="mt-auto pt-4 -mx-[25.6px] -mb-[25.6px]">
                  <div className="relative aspect-[5/3] overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1764809095840x334856083424703840/users.png" 
                      alt="Users" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {feature.id === "01" && (
                <div className="mt-auto pt-4">
                  <div className="relative aspect-[5/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-[5px]">
                    <img 
                      src={feature.image} 
                      alt={feature.realTitle} 
                      className="w-full h-full object-contain" 
                      style={{ marginTop: '10px' }}
                    />
                  </div>
                </div>
              )}
              
              {feature.id === "02" && (
                <div className="mt-auto pt-4">
                  <div className="relative aspect-[5/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <img 
                      src={feature.image} 
                      alt={feature.realTitle} 
                      className="w-5/6 h-5/6 object-contain" 
                    />
                  </div>
                </div>
              )}
              
              {feature.id === "04" && (
                <div className="mt-auto pt-4">
                  <div className="relative aspect-[5/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                    <img 
                      src={feature.image} 
                      alt={feature.realTitle} 
                      className="w-full h-full object-cover" 
                      style={{ objectPosition: 'right center' }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


