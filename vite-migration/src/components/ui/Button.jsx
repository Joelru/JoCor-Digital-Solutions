const variants = {
  primary: "bg-black text-white hover:bg-black/80 transition-colors duration-200",
  secondary:
    "border border-gray-300 text-black hover:bg-emerald-200 transition-colors duration-200",
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium h-11 px-8 group";

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
