import Image, { StaticImageData } from "next/image";

type CardProps = {
    thumbnail: string | StaticImageData; // The type can be string or StaticImageData
    title: string;
    description: string;
    url: string;
};

export default function Card({ thumbnail, title, description, url }: CardProps) {
    return (
        <div className="bg-light-2 w-400 h-400 flex flex-col items-center justify-center p-4 rounded-2xl shadow-lg">
            <Image src={thumbnail} alt={title} width={400} height={300} className="rounded-2xl object-cover" />
            <h2 className="text-2l font-bold text-left w-full pl-2 pt-5">{title}</h2>
            <p className="text-left w-full pl-2 pt-2">Description: {description}</p>
            <a href={url}>Learn More</a>
        </div>
    );
}
