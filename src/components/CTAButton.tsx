"use client";

type CTAButtonProps = {
  variant?: "primary" | "secondary";
  size?: "md" | "lg" | "xl";
};

export default function CTAButton({
  variant = "primary",
  size = "lg",
}: CTAButtonProps) {
  const handleClick = () => {
    const formEl = document.getElementById("waitlist-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const baseClass =
    "inline-flex items-center justify-center font-bold text-white transition-colors hover:opacity-90";
  const variantClass =
    variant === "primary"
      ? "bg-[#EF5555] hover:bg-[#EF5555]/90"
      : "bg-[#EF5555] px-6 font-semibold text-white md:px-8";
  const sizeClass = {
    md: "h-9 w-[70px] text-sm md:h-10 md:w-[100px]",
    lg: "h-[58px] w-[300px] text-[22px]",
    xl: "h-[58px] w-[300px] text-[22px] md:w-[430px] md:py-4 md:text-2xl",
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClass} ${variantClass} ${sizeClass[size]} rounded-md`}
      id="landing-apply-button"
    >
      대기신청
    </button>
  );
}
