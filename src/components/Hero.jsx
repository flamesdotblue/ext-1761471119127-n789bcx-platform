import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200 backdrop-blur">
            Minimal • Interactive • Modern
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Hello World, beautifully.
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-7 text-gray-700">
            A crisp starter app with an interactive, minimalist 3D cover. Tap or hover the cubes to watch a soft red ripple cascade across the grid.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3" id="get-started">
            <a
              href="#features"
              className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-white/80 px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 backdrop-blur hover:bg-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
