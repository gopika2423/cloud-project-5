const featureCards = [
  {
    title: "Temporary workspaces",
    description:
      "Spin up private project spaces instantly and set expiration windows for automatic cleanup.",
  },
  {
    title: "Secure sharing",
    description:
      "Control access by team, role, and workspace membership to keep only the right people in the loop.",
  },
  {
    title: "File previews",
    description:
      "Review documents, images, and media from a single dashboard without juggling multiple tools.",
  },
  {
    title: "Usage insights",
    description:
      "Track activity, team presence, and storage consumption to make better decisions as projects evolve.",
  },
];

const steps = [
  "Create a workspace with a custom expiry timer.",
  "Invite teammates and assign role-based access.",
  "Upload files, collaborate, and monitor activity in real time.",
  "When the timer expires, the workspace closes automatically and removes content.",
];

const metrics = [
  { label: "Workspaces created", value: "4.8K+" },
  { label: "Files shared", value: "1.3M" },
  { label: "Avg. collaboration time", value: "3.2 hrs" },
  { label: "Auto-expired cleanup rate", value: "99.7%" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.18),_transparent_28%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 font-bold text-white shadow-glow">
            C
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">CloudNest</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#how-it-works" className="transition hover:text-white">How it works</a>
          <a href="#security" className="transition hover:text-white">Security</a>
        </nav>

        <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10">
          Launch demo
        </button>
      </header>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-16">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
            Secure collaboration
          </div>

          <h1 className="max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl">
            Temporary cloud workspaces for fast, secure sharing.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            CloudNest gives teams a lightweight way to create private project rooms,
            share files, collaborate in real time, and let workspaces expire automatically
            when the task is done.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110">
              Get started
            </button>
            <button className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
              View dashboard
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>Firebase-powered security</span>
            <span>Auto-expiry cleanup</span>
            <span>Team access controls</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-glow backdrop-blur-xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Workspace</p>
                  <h2 className="mt-1 text-2xl font-bold">Marketing Sprint</h2>
                </div>
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>Storage</span>
                    <span>78%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Members</p>
                    <p className="mt-3 text-3xl font-bold">12</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Expires in</p>
                    <p className="mt-3 text-3xl font-bold">6d</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200">Recent activity</p>
                    <span className="text-xs text-slate-400">Today</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-center justify-between">
                      <span>Uploaded campaign brief</span>
                      <span className="text-slate-500">2m ago</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>New teammate invited</span>
                      <span className="text-slate-500">18m ago</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Design feedback shared</span>
                      <span className="text-slate-500">1h ago</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-300">Features</p>
            <h3 className="mt-2 text-3xl font-bold md:text-4xl">Everything to run a secure project room.</h3>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition hover:border-slate-600 hover:bg-slate-900">
              <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-orange-500/20" />
              <h4 className="text-xl font-semibold text-white">{feature.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-orange-300">How it works</p>
          <h3 className="mt-3 text-3xl font-bold md:text-4xl">Create, collaborate, and expire on schedule.</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-orange-500 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-base leading-7 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-blue-500/10 to-slate-900 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-300">Built for secure teamwork</p>
            <h3 className="mt-3 text-3xl font-bold">Designed around controlled access and clean lifecycle management.</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                <p className="text-3xl font-black text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
