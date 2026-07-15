import Image from "next/image";

export function Gallery({ images, name }: { images: string[]; name: string }) {
  return (
    <section className="grid gap-2 overflow-hidden rounded-[20px] md:grid-cols-4 md:grid-rows-2">
      <Image
        src={images[0]}
        alt={name}
        width={1000}
        height={700}
        priority
        className="aspect-[1.25/1] w-full object-cover md:col-span-2 md:row-span-2 md:h-full"
      />
      {images.slice(1, 5).map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`${name} ${index + 2}`}
          width={600}
          height={440}
          className="hidden h-full w-full object-cover md:block"
        />
      ))}
    </section>
  );
}
