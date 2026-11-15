export type PhotoAsset = {
  src: string;
  width: number;
  height: number;
  position?: string;
};

type Props = PhotoAsset & {
  alt: string;
  className?: string;
  priority?: boolean;
};

const Photo = ({ src, width, height, position, alt, className, priority }: Props) => (
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

export default Photo;
