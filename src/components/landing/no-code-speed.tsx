import { motion } from "framer-motion";
import { Zap, Code2 } from "lucide-react";

const Chart = ({ valueLabel }: { valueLabel: string }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[auto,1fr] gap-x-6">
        {/* Airdev row */}
        <div className="flex items-center gap-2 h-8">
          <img
            src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg"
            alt="Airdev"
            className="h-6 w-auto"
          />
        </div>
        <div className="relative h-8">
          <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "20%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full flex relative z-10"
            >
              <div className="h-full bg-[#93c5fd] w-[25%] rounded-l-md" />
              <div className="h-full bg-[#1265EF] w-[50%]" />
              <div className="h-full bg-[#7491FF] w-[25%] rounded-r-md" />
            </motion.div>

            {/* Annotation Line */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[21%] right-0 flex items-center">
               <div className="h-[1px] bg-gray-300 flex-1 relative">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 border-t-[3px] border-b-[3px] border-r-[6px] border-t-transparent border-b-transparent border-r-gray-300" />
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-[3px] border-b-[3px] border-l-[6px] border-t-transparent border-b-transparent border-l-gray-300" />
               </div>
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 flex items-center gap-1.5 whitespace-nowrap">
                  <Zap className="w-4 h-4 fill-black text-black" />
                  <span className="font-bold text-sm text-[#1a1a1a]">{valueLabel}</span>
               </div>
            </div>
          </div>

        {/* Code row */}
        <div className="flex items-center gap-2 h-8 mt-8">
          <div className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center text-gray-700 bg-white shrink-0">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-[#1a1a1a] text-lg leading-none">Code</span>
        </div>
        <div className="relative h-8 mt-8">
          <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="h-8 flex mb-3"
            >
              <div className="h-full bg-[#93c5fd] w-[10%] rounded-l-md" />
              <div className="h-full bg-[#1265EF] w-[75%]" />
              <div className="h-full bg-[#7491FF] w-[15%] rounded-r-md" />
            </motion.div>

          {/* Legend Labels */}
          <div className="flex text-xs font-medium text-gray-500 w-full">
            <span className="w-[10%]">Scoping & design</span>
            <span className="w-[75%] text-center">Development</span>
            <span className="w-[15%] text-right">Review & launch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NoCodeSpeed = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-left max-w-[900px] mb-16">
          <span className="text-[15px] font-semibold text-[#1e3a8a] uppercase tracking-wider mb-3 block">
            NO-CODE SPEED
          </span>
          <h2 className="text-[48px] font-semibold tracking-tight leading-none text-[#1a1a1a] mb-6">
            Supercharged by Bubble, to lower cost and time
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We have designed our process around the unique speed and flexibility of the Bubble platform. This allows us to cut timelines and budgets by 5x versus traditional code, without sacrificing quality.
          </p>
        </div>

        <Chart valueLabel="5x faster" />
      </div>
    </section>
  );
};
