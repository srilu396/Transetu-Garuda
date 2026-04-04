export default function FastagDetailLoading() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 animate-pulse">
        <div className="h-5 w-40 bg-slate-200 rounded mb-8" />
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/60 mb-12">
          <div className="h-4 w-28 bg-slate-200 rounded mb-6" />
          <div className="h-10 w-3/4 max-w-lg bg-slate-200 rounded mb-8" />
          <div className="space-y-3 mb-8">
            <div className="h-4 bg-slate-100 rounded w-full" />
            <div className="h-4 bg-slate-100 rounded w-5/6" />
            <div className="h-4 bg-slate-100 rounded w-4/6" />
          </div>
          <div className="aspect-video w-full bg-slate-100 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
