import Image from "next/image";

export default function Profile() {
  return (
    <section className="w-full mx-auto">
      <div className="relative w-52 h-52 mx-auto mt-8">
        <Image
          className="border-4 border-black rounded-full dark:border-sky-500 drop-shadow-xl shadow-black"
          src="/images/Profile_face.JPG"
          layout="fill"
          objectFit="cover"
          alt="Sameer Jha"
          priority={true}
        />
      </div>
    </section>
  );
}
