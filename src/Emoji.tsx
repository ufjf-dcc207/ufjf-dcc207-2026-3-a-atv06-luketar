import "./Emoji.css";

type EMOJI_KEYS = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map <EMOJI_KEYS, string>([
    ["happy", "🙂"],
    ["sick", "🤢"],
    ["dead", "😵"],
]);

export default function Emoji(){
    return (
        <div className="emoji">
            {EMOJI_MAP.get("sick") || "🫥"}
        </div>)
};