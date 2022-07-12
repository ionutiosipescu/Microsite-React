const iconsPath = "/icons/";
// const iconsPath = "../../public/assets/icons/";

const icon = (className, name) => (
  <img
    className={className}
    src={iconsPath + name + ".svg"}
    alt=" "
    // fill="red"
  />
);

const iconPng = (className, name) => (
  <img
    className={className}
    src={iconsPath + name + ".png"}
    height="32px"
    alt=" "
  />
);

const Search = ({ className }) => icon(className, "search");
const ChevronRight = ({ className }) => icon(className, "chevronRight");
const LinkedIn = ({ className }) => icon(className, "linkedin");
const YouTube = ({ className }) => icon(className, "youtube");
const Facebook = ({ className }) => icon(className, "facebook");
const Twitter = ({ className }) => icon(className, "twitter");
const XIcon = ({ className }) => icon(className, "xIcon");

const ChevronRightBlue = ({ className }) => iconPng(className, "chevron");
const ChevronRightWhite = ({ className }) => iconPng(className, "chevron");
const IconTriangle = ({ className }) => iconPng(className, "iconTriangle");
const PdfIcon = ({ className }) => iconPng(className, "pdf");
const DocumentIcon = ({ className }) => iconPng(className, "document");
const ShareIcon = ({ className }) => iconPng(className, "share");
const LetterIcon = ({ className }) => iconPng(className, "letter");
// const IconTriangle = ({ className }) => iconPng(className, "iconTriangle");

export {
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
};
