import { AnimateLabel } from "@/components/animation";


const InfoSection = ({title,description,labels}:{title:string; description: string; labels:string}) => {
   const arrLabel = labels.split(",");
  return (
    <section className="w-full px-8 py-12 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-2xl mt-7">
      <div className="p-8 flex flex-col lg:flex-row justify-between items-start gap-10  mx-auto">
        
        {/* Left: Title + Description */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-3xl text-slate-700 dark:text-slate-300">
            {description}
          </p>
        </div>

        {/* Right: Labels */}
        <div className="flex flex-wrap gap-4">
            {arrLabel.map((label,index)=>(
               <AnimateLabel key={label}  x={`${(index%2)+1}`} label={label}/> 
            ))}
            
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
