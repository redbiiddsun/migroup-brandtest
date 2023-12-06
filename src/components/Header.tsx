import Image from "next/image";

type IconicType = {
    title: string;
    img: string;
    data: summaryData
}

export default function Header({title, img, data}: IconicType) {

  return (
    <>
      <div className="flex w-full h-full justify-center items-center flex-col pt-4 md:pt-8 lg:pt-14">
        <span className="text-lg text-white md:mb-4 lg:mb-10 lg:text-2xl">{title}</span>
        <Image width={150} height={150} alt="logo" src={img} className="md:scale-100 scale-75" />
        <span className={`text-2xl mt-0 md:mt-4 text-indigo`} style={{color: data?.animalDetail?.color}}>{data?.animalDetail?.name}</span>
      </div>
    </>
  );
}