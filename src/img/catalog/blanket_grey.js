import blanket from "./blanket_grey/img_blanket_grey.jpg";
import blanketP from "./blanket_grey/img_blanket_grey_p.jpg";

import blanketBunny from "./blanket_grey/img_blanketBunny_grey.jpg";
import blanketBunnyP from "./blanket_grey/img_blanketBunny_grey_p.jpg";

import blanketBase from "./blanket_grey/img_blanketBase_grey.jpg";
import blanketBaseP from "./blanket_grey/img_blanketBase_grey_p.jpg";

import blanketBaseBunny from "./blanket_grey/img_blanketBaseBunny_grey.jpg";
import blanketBaseBunnyP from "./blanket_grey/img_blanketBaseBunny_grey_p.jpg";


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