const iconsPath = "/icons/";

const icon = (props, name, alt) => {
  return (
    <img
      src={iconsPath + name + ".svg"}
      alt={alt}
      className={props?.className}
      width={props?.width}
      height={props?.height}
    />
  );
};

const iconPng = (className, name) => (
  <img className={className} src={iconsPath + name + ".png"} />
);

const Search = (props) => icon(props, "search", "search icon");
const LinkedIn = (props) => icon(props, "linkedin", "linkedin icon");
const YouTube = (props) => icon(props, "youtube", "youtube icon");
const Facebook = (props) => icon(props, "facebook", "facebook icon");
const Twitter = (props) => icon(props, "twitter", "twitter icon");
const XIcon = (props) => icon(props, "xIcon", "cancel icon");
const ChevronRight = (props) =>
  icon(props, "chevronRight", "chevron right icon");
const ChevronRightWhite = (props) =>
  icon(props, "chevronRightWhite", "chevron right icon");
const ChevronUpWhite = (props) =>
  icon(props, "chevronUpWhite", "chevron up icon");
const ChevronDownWhite = (props) =>
  icon(props, "chevronDownWhite", "chevron down icon");
const Logo = ({ className }) => icon(className, "logo", "logo");

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
