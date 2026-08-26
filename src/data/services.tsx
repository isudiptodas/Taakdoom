import { GiFilmStrip } from "react-icons/gi";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { FaFileImage } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { RiFilmAiFill } from "react-icons/ri";
import { LuTv } from "react-icons/lu";

export const services = [
  {
    id: 1,
    title: "Brand Film",
    desc: "Stories that give your brand a soul.",
    icon: <GiFilmStrip/>
  },
  {
    id: 2,
    title: "Music BGM",
    desc: "Sound that makes every moment resonate.",
    icon: <IoMusicalNotesSharp/>
  },
  {
    id: 3,
    title: "Digital Content",
    desc: "Ideas crafted to move the digital audience.",
    icon: <FaFileImage/>
  },
  {
    id: 4,
    title: "Cinematography",
    desc: "Frames that turn moments into stories.",
    icon: <FaVideo/>
  },
  {
    id: 5,
    title: "AI Film Making",
    desc: "Reimagining cinema through artificial intelligence.",
    icon: <RiFilmAiFill/>
  },
  {
    id: 6,
    title: "Ad's Creation",
    desc: "Ideas that capture attention and create impact.",
    icon: <LuTv/>
  }
];