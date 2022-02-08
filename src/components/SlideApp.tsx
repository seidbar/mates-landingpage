import { AppFrame } from './AppFrame';

export const SlideApp = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
    <div className="bg-candy">
      <AppFrame />
    </div>
    <div className="flex flex-col justify-center p-24 md:p-10 lg:p-32 bg-ghost">
      <h1 className="text-6xl font-bold my-6">Lorem ipsum.</h1>
      <div className="flex flex-col">
        <p className="my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue sit
          adipiscing eu lectus eu.
        </p>
      </div>
    </div>
  </div>
);
