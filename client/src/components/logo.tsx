interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo placeholder - replace with actual logo when uploaded */}
      <div className="w-10 h-10 bg-gradient-to-br from-primary-custom to-secondary-custom rounded-lg flex items-center justify-center mr-3">
        <span className="text-white font-bold text-lg">TB</span>
      </div>
      {showText && (
        <h1 className="text-2xl font-bold text-primary-custom font-serif">
          ThriveBridge Malawi
        </h1>
      )}
    </div>
  );
}