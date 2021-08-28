import baseCotton from "./baseCotton_flowers/img_baseCotton_flowers.jpg";
import baseCottonP from "./baseCotton_flowers/img_baseCotton_flowers_p.jpg";

import baseCottonBunny from "./baseCotton_flowers/img_baseCottonBunny_flowers.jpg";
import baseCottonBunnyP from "./baseCotton_flowers/img_baseCottonBunny_flowers_p.jpg";

import baseCottonEars from "./baseCotton_flowers/img_baseCottonEars_flowers.jpg";
import baseCottonEarsP from "./baseCotton_flowers/img_baseCottonEars_flowers_p.jpg";

import baseCottonBunnyEars from "./baseCotton_flowers/img_baseCottonBunnyEars_flowers.jpg";
import baseCottonBunnyEarsP from "./baseCotton_flowers/img_baseCottonBunnyEars_flowers_p.jpg";


export default [
    {
        type: "baseCotton",
        noPostcard: baseCotton,
        withPostcard: baseCottonP,
    },
    {
        type: "baseCottonBunny",
        noPostcard: baseCottonBunny,
        withPostcard: baseCottonBunnyP,
    },
    {
        type: "baseCottonEars",
        noPostcard: baseCottonEars,
        withPostcard: baseCottonEarsP,
    },
    {
        type: "baseCottonBunnyEars",
        noPostcard: baseCottonBunnyEars,
        withPostcard: baseCottonBunnyEarsP,
    }
]