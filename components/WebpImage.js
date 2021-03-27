const WebpImage = ({ alt, src, width, height, className }) => (
    <picture className={className}>
        <source srcSet={`/img/webp/${src}.webp`} type="image/webp" />
        <img src={`/img/${src}.jpg`} alt={alt} width={width} height={height} />
    </picture>
);

export default WebpImage;
