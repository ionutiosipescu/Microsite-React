const iconsPath = '/icons/'

const icon = (props, name, alt) => {
	return (
		<img
			src={iconsPath + name + '.svg'}
			alt={alt}
			className={props?.className}
			width={props?.width}
			height={props?.height}
		/>
	)
}

const iconPng = (className, name) => (
	<img className={className} src={iconsPath + name + '.png'} />
)

const Search = props => icon(props, 'search', 'search icon')
const ChevronRight = props => icon(props, 'chevronRight', 'chevron right icon')
const LinkedIn = props => icon(props, 'linkedin', 'linkedin icon')
const YouTube = props => icon(props, 'youtube', 'youtube icon')
const Facebook = props => icon(props, 'facebook', 'facebook icon')
const Twitter = props => icon(props, 'twitter', 'twitter icon')
const XIcon = props => icon(props, 'xIcon', 'cancel icon')

const ChevronRightBlue = ({ className }) => iconPng(className, 'chevron')
const ChevronRightWhite = ({ className }) => iconPng(className, 'chevron')
const IconTriangle = ({ className }) => iconPng(className, 'iconTriangle')
const PdfIcon = ({ className }) => iconPng(className, 'pdf')
const DocumentIcon = ({ className }) => iconPng(className, 'document')
const ShareIcon = ({ className }) => iconPng(className, 'share')
const LetterIcon = ({ className }) => iconPng(className, 'letter')

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
}
