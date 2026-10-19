import Image from "next/image";
export function FoodPhoto({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`food-photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 760px) 100vw, 55vw"
      />
      <figcaption>
        ILLUSTRATIVE PHOTO · RESTAURANT PHOTOS COMING SOON
      </figcaption>
    </figure>
  );
}
