interface VideoYoutubeProps {
  name: string;
  linky: string;
}

export const VideoYoutube = ({ name, linky }: VideoYoutubeProps) => {
  return (
    <div className="video-container bg-black p-4">
      <p className="text-white">{name}</p>
      <iframe
        width="420"
        height="215"
        src={linky}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        loading="lazy"
      ></iframe>
    </div>
  );
}
