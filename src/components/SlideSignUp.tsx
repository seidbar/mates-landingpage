import { VideoLoop } from './VideoLoop';

export const SlideSignUp = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
    <VideoLoop video="tv" />
    <div className="flex flex-col justify-center items-center p-24 md:p-10 lg:p-32 bg-ghost">
      <div className="absolute top-5 left-5">
        <img src="/logo.png" alt="Mates Logo" />
      </div>
      <div>
        <h1 className="text-6xl font-bold my-6">werde mate.</h1>
        <div className="flex justify-center">
          <button
            className="bg-candy text-ghost rounded-2xl px-3 py-1 self-end"
            type="button"
          >
            Los geht's!
          </button>
        </div>
      </div>
    </div>
  </div>
);
