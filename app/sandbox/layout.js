export default function DashboardLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="m-6">
        {children}
      </div>
    </div>
  );
}