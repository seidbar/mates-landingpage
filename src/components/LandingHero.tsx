export const LandingHero = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
    <div className="flex flex-col justify-center items-center p-24 md:p-10 lg:p-32 bg-magnolia">
      <div className="absolute top-5 left-5">
        <img src="/logo.png" alt="Mates Logo" />
      </div>
      <div>
        <h1 className="text-6xl font-bold my-6">find your mates.</h1>
        <div className="w-3/5 flex flex-col">
          <p className="my-6">
            Neu in der Stadt? Keine Lust mehr auf Zweck-WG? Lerne Leute kennen
            mit denen du zusammen leben mächtest: Sei ganz du selbst und finde
            deine WG!
          </p>
          <button
            className="bg-white rounded-2xl px-3 py-1 self-end"
            type="button"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
    <div className="flex">
      <video autoPlay muted loop className="object-cover">
        <source src="/video/mates.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
);
