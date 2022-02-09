import { AppFrame } from './AppFrame';
import { TextSlideWrapper } from './TextSlideWrapper';

export const SlideApp = () => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="bg-candy h-screen">
      <AppFrame />
    </div>
    <TextSlideWrapper styles=" bg-ghost">
      <h1 className="text-6xl font-bold my-6">Lorem ipsum.</h1>
      <div className="flex flex-col">
        <p className="my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue sit
          adipiscing eu lectus eu.
        </p>
      </div>
    </TextSlideWrapper>
  </div>
);
