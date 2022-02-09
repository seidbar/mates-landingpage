export const VideoLoop = ({ video }: { video: string }) => (
  <video autoPlay muted loop className="object-cover">
    <source src={`/video/${video}.mp4`} type="video/mp4" />
  </video>
);
