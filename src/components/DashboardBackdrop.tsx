type DashboardBackdropProps = {
  className?: string;
};

export default function DashboardBackdrop({ className = "" }: DashboardBackdropProps) {
  return (
    <img
      src="/images/hero-dashboard-transparent.png"
      alt="Dashboard snapshot"
      className={`block select-none ${className}`}
      draggable={false}
    />
  );
}
