export type PhotoAsset = {
  src: string;
  webp?: string;
  width: number;
  height: number;
  position?: string;
};

type Props = PhotoAsset & {
  alt: string;
  className?: string;
  priority?: boolean;
};

const Photo = ({ src, webp, width, height, position, alt, className, priority }: Props) => {
  const img = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={position ? { objectPosition: position } : undefined}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  );

  if (!webp) return img;

  return (
    <picture style={{ display: "contents" }}>
      <source srcSet={webp} type="image/webp" />
      {img}
    </picture>
  );
};

export default Photo;
