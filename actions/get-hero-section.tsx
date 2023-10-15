import { Category, hero_section } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/herosections`;

const getHerosections = async (id: string): Promise<hero_section> => {
    const res = await fetch(`${URL}/${id}`)

    return res.json();
}

export default getHerosections;