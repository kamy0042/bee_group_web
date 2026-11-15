export type PhotoAsset = {
  src: string;
  width: number;
  height: number;
  position?: string;
  transform?: string;
};

type Props = PhotoAsset & {
  alt: string;
  className?: string;
  priority?: boolean;
};

const Photo = ({ src, width, height, position, transform, alt, className, priority }: Props) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    style={position || transform ? { objectPosition: position, transform } : undefined}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    fetchPriority={priority ? "high" : undefined}
  />
);

export default Photo;
