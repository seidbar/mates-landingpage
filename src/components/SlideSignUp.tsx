import { VideoLoop } from './VideoLoop';
import { TextSlideWrapper } from './TextSlideWrapper';

export const SlideSignUp = () => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="h-screen flex">
      <VideoLoop video="tv" />
    </div>
    <TextSlideWrapper styles="bg-ghost">
      <h1 className="text-6xl font-bold my-6">werde mate.</h1>
      <div className="flex justify-center">
        <button
          className="bg-candy text-ghost rounded-2xl px-3 py-1 self-end"
          type="button"
        >
          Los geht's!
        </button>
      </div>
    </TextSlideWrapper>
  </div>
);
