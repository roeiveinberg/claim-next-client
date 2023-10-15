import { Button } from "./button"

interface HeadingProps {
    title: string
    description: string
};

export const Heading: React.FC<HeadingProps> = ({
    title,
    description
}) => {


    return (
        <div className="mt-4 flex flex-col gap-y-1">
            <h2 className=" font-semibold text-2xl">{title}</h2>
            <p className=" font-light text-sm tracking-wide text-[#929292]">{description}</p>
        </div>
    )
}