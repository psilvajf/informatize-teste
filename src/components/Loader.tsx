export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        <div className="h-12 w-12 rounded-full"></div>
        <div className="absolute left-0 top-0 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    </div>
  );
};
