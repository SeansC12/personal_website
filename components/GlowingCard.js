import { Card, CardHeader } from "@/components/ui/card";

function CustomGlowingCard({ children }) {
  return (
    <div className="w-full flex items-center mt-5 mb-8 justify-center">
      <div className="relative inline-flex group grow justify-center">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#f0ad4e] to-orange-600 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Card
          variant="outline"
          className="relative hover:dark:bg-site-gray dark:bg-site-gray flex gap-1 cursor-default w-full"
        >
          <CardHeader className="w-full flex items-center">
            {children}
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default CustomGlowingCard;
