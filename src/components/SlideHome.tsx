import { TextSlideWrapper } from './TextSlideWrapper';
import { VideoLoop } from './VideoLoop';

export const SlideHome = () => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <TextSlideWrapper styles="bg-magnolia">
      <div className="self-start md:absolute md:top-5 md:left-5">
        <img src="/logo.png" alt="Mates Logo" />
      </div>
      <h1 className="text-6xl font-bold my-6">find your mates.</h1>
      <div className="md:w-3/5 flex flex-col">
        <p className="my-6">
          Neu in der Stadt? Keine Lust mehr auf Zweck-WG? Lerne Leute kennen mit
          denen du zusammen leben mächtest: Sei ganz du selbst und finde deine
          WG!
        </p>
        <button
          className="bg-white rounded-2xl px-3 py-1 self-end"
          type="button"
        >
          Sign up for free
        </button>
      </div>
    </TextSlideWrapper>

    <div className="flex">
      <VideoLoop video="mates" />
    </div>
  </div>
);
