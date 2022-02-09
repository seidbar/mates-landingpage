import { AppFrame } from './AppFrame';
import { TextSlideWrapper } from './TextSlideWrapper';

export const SlideAppReverse = () => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <TextSlideWrapper styles="bg-ghost">
      <h1 className="text-6xl font-bold my-6">Lorem ipsum.</h1>
      <div className="flex flex-col">
        <p className="my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue sit
          adipiscing eu lectus eu.
        </p>
      </div>
    </TextSlideWrapper>
    <div className="bg-magnolia h-96 md:h-screen">
      <AppFrame />
    </div>
  </div>
);
