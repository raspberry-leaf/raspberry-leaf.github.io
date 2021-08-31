import blanket from "./blanket_beige/img_blanket_beige.jpg";
import blanketP from "./blanket_beige/img_blanket_beige_p.jpg";

import blanketBunny from "./blanket_beige/img_blanketBunny_beige.jpg";
import blanketBunnyP from "./blanket_beige/img_blanketBunny_beige_p.jpg";

import blanketBase from "./blanket_beige/img_blanketBase_beige.jpg";
import blanketBaseP from "./blanket_beige/img_blanketBase_beige_p.jpg";

import blanketBaseBunny from "./blanket_beige/img_blanketBaseBunny_beige.jpg";
import blanketBaseBunnyP from "./blanket_beige/img_blanketBaseBunny_beige_p.jpg";


export default [
    {
        type: "blanket",
        noPostcard: blanket,
        withPostcard: blanketP,
    },
    {
        type: "blanketBunny",
        noPostcard: blanketBunny,
        withPostcard: blanketBunnyP,
    },
    {
        type: "blanketBase",
        noPostcard: blanketBase,
        withPostcard: blanketBaseP,
    },
    {
        type: "blanketBaseBunny",
        noPostcard: blanketBaseBunny,
        withPostcard: blanketBaseBunnyP,
    }
]