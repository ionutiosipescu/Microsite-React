import { ReactComponent as Search } from "./icons/search.svg"
import { ReactComponent as LinkedIn } from "./icons/linkedin.svg"
import { ReactComponent as YouTube } from "./icons/youtube.svg"
import { ReactComponent as Facebook } from "./icons/facebook.svg"
import { ReactComponent as Twitter } from "./icons/twitter.svg"
import { ReactComponent as XIcon } from "./icons/xIcon.svg"
import { ReactComponent as ChevronRight } from "./icons/chevronRight.svg"
import { ReactComponent as ChevronRightWhite } from "./icons/chevronRightWhite.svg"
import { ReactComponent as ChevronUpWhite } from "./icons/chevronUpWhite.svg"
import { ReactComponent as ChevronDownWhite } from "./icons/chevronDownWhite.svg"
import { ReactComponent as Logo } from "./icons/logo.svg"
import { ReactComponent as LogoFooter } from "./icons/logo_footer.svg"
import { ReactComponent as ArrowRight } from "./icons/arrowright.svg"
import { ReactComponent as AlvarezMarsal } from "./icons/AlvarezMarsal.svg"
import { ReactComponent as Mail } from "./icons/mail.svg"
import { ReactComponent as Pdf } from "./icons/pdf.svg"
import { ReactComponent as Share } from "./icons/share.svg"
import { ReactComponent as BlueRectangle } from "./icons/BlueRectangle.svg"

const iconsPath = "/icons/"

const iconPng = (className, name) => (
  <img className={className} src={iconsPath + name + ".png"} />
)

const ChevronRightBlue = ({ className }) => iconPng(className, "chevron")
const IconTriangle = ({ className }) => iconPng(className, "iconTriangle")
const PdfIcon = ({ className }) => iconPng(className, "pdf")
const DocumentIcon = ({ className }) => iconPng(className, "document")
const ShareIcon = ({ className }) => iconPng(className, "share")
const FacebookIcon = ({ className }) => iconPng(className, "facebook")
const Slack = ({ className }) => iconPng(className, "slack")
const Spotify = ({ className }) => iconPng(className, "spotify")
const Antena = ({ className }) => iconPng(className, "antena")
const AmazonMusic = ({ className }) => iconPng(className, "amazonmusic")
const View = ({ className }) => iconPng(className, "view")

const TwitterIcon = ({ className }) => iconPng(className, "twitter")
const LetterIcon = ({ className }) => iconPng(className, "letter")
const FooterFacebookIcon = ({ className }) => iconPng(className, "icon_fb@2x")
const FooterLinkedinIcon = ({ className }) => iconPng(className, "icon_li@2x")
const FooterTwitterIcon = ({ className }) => iconPng(className, "icon_t@2x")
const FooterYoutTubeIcon = ({ className }) => iconPng(className, "icon_yt@2x")

const iconsStayPath = "/icons/stayConnected/"

const iconStayPng = (className, name) => (
  <img className={className} src={iconsStayPath + name + ".png"} />
)

const LinkedinStay = ({ className }) => iconStayPng(className, "in_0")
const FacebookStay = ({ className }) => iconStayPng(className, "fb_0")
const LetterStay = ({ className }) => iconStayPng(className, "newsletter_0")
const TwitterStay = ({ className }) => iconStayPng(className, "twit_0")
const YoutubeStay = ({ className }) => iconStayPng(className, "yt")

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
  LogoFooter,
  ArrowRight,
  Mail,
  Pdf,
  Share,
  BlueRectangle,
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
  FooterFacebookIcon,
  FooterLinkedinIcon,
  FooterTwitterIcon,
  FooterYoutTubeIcon,
  TwitterIcon,
  FacebookIcon,
  Slack,
  Spotify,
  Antena,
  AmazonMusic,
  View,
}
