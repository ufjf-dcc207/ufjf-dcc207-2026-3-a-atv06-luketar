export type EMOJI_KEYS = "happy" | "sick" | "dead";

export type AtributoType = 0|1|2|3|4|5;

export type EmojiType = {
    vida: AtributoType;
    energia: AtributoType;
    comida: AtributoType;
    agua: AtributoType;
    luz: boolean;
}