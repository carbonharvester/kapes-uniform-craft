import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";
import beforeImageComparison from "@/assets/before-image-comparison-new.png";
function Feature() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;
    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    const percentage = x / rect.width * 100;
    setInset(percentage);
  };
  return <div className="w-full pt-8 pb-20 lg:pt-12 lg:pb-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <Badge>Comparison</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Before vs After
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">See the transformation from The British International School of Jeddah's previous shop into our modern solution.</p>
          </div>
          <div className="pt-12 w-full">
            <div className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none" onMouseMove={onMouseMove} onMouseUp={() => setOnMouseDown(false)} onTouchMove={onMouseMove} onTouchEnd={() => setOnMouseDown(false)}>
              <div className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1 select-none" style={{
              left: inset + "%"
            }}>
                <button className="bg-muted rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center" onTouchStart={e => {
                setOnMouseDown(true);
                onMouseMove(e);
              }} onMouseDown={e => {
                setOnMouseDown(true);
                onMouseMove(e);
              }} onTouchEnd={() => setOnMouseDown(false)} onMouseUp={() => setOnMouseDown(false)}>
                  <GripVertical className="h-4 w-4 select-none" />
                </button>
              </div>
              <img src="https://res.cloudinary.com/dng12bd0a/image/upload/v1753009981/Untitled_design_3_zz8vdo.jpg" alt="Modern uniform solution" className="absolute left-0 top-0 z-10 w-full h-full object-cover aspect-video rounded-2xl select-none border" style={{
              clipPath: "inset(0 0 0 " + inset + "%)"
            }} />
              <img src={beforeImageComparison} alt="Traditional uniform distribution" className="absolute left-0 top-0 w-full h-full object-cover aspect-video rounded-2xl select-none border" />
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export { Feature };