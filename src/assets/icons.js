import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as LinkedIn } from "./icons/linkedin.svg";
import { ReactComponent as YouTube } from "./icons/youtube.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Twitter } from "./icons/twitter.svg";
import { ReactComponent as XIcon } from "./icons/xIcon.svg";
import { ReactComponent as ChevronRight } from "./icons/chevronRight.svg";
import { ReactComponent as ChevronRightWhite } from "./icons/chevronRightWhite.svg";
import { ReactComponent as ChevronUpWhite } from "./icons/chevronUpWhite.svg";
import { ReactComponent as ChevronDownWhite } from "./icons/chevronDownWhite.svg";
import { ReactComponent as Logo } from "./icons/logo.svg";
import { ReactComponent as AlvarezMarsal } from "./icons/AlvarezMarsal.svg";

const iconsPath = "/icons/";

const iconPng = (className, name) => (
  <img className={className} src={iconsPath + name + ".png"} />
);

const ChevronRightBlue = ({ className }) => iconPng(className, "chevron");
const IconTriangle = ({ className }) => iconPng(className, "iconTriangle");
const PdfIcon = ({ className }) => iconPng(className, "pdf");
const DocumentIcon = ({ className }) => iconPng(className, "document");
const ShareIcon = ({ className }) => iconPng(className, "share");
const LetterIcon = ({ className }) => iconPng(className, "letter");

const iconsStayPath = "/icons/stayConnected/";

const iconStayPng = (className, name) => (
  <img className={className} src={iconsStayPath + name + ".png"} />
);

const LinkedinStay = ({ className }) => iconStayPng(className, "in_0");
const FacebookStay = ({ className }) => iconStayPng(className, "fb_0");
const LetterStay = ({ className }) => iconStayPng(className, "newsletter_0");
const TwitterStay = ({ className }) => iconStayPng(className, "twit_0");
const YoutubeStay = ({ className }) => iconStayPng(className, "yt");

export {
  Logo,
  AlvarezMarsal,
  ChevronUpWhite,
  ChevronDownWhite,
  Search,
  XIcon,
  ChevronRight,
  ChevronRightBlue,
  ChevronRightWhite,
  LinkedIn,
  Facebook,
  Twitter,
  YouTube,
  IconTriangle,
  PdfIcon,
  DocumentIcon,
  ShareIcon,
  LetterIcon,
  LinkedinStay,
  FacebookStay,
  LetterStay,
  TwitterStay,
  YoutubeStay,
};
