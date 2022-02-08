export const AppHighlight = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
    <div className="flex">
      <div className="flex flex-col justify-center p-24 md:p-10 lg:p-32">
        <img src="/iPhoneFrame.png" alt="Mates Logo" className="max-h-screen" />
      </div>
    </div>
    <div className="flex flex-col justify-center p-24 md:p-10 lg:p-32">
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
