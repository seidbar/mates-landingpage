export const VideoLoop = ({ video }: { video: string }) => (
  <div className="flex">
    <video autoPlay muted loop className="object-cover">
      <source src={`/video/${video}.mp4`} type="video/mp4" />
    </video>
  </div>
);
