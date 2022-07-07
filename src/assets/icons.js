const iconsPath = './icons/'
// const iconsPath = '../../public/assets/icons/'

const icon = (className, name) => (
	<img
		className={className}
		src={iconsPath + name + '.svg'}
		alt=" "
		// fill="red"
	/>
)

const iconPng = (className, name) => (
	<img className={className} src={iconsPath + name + '.png'} alt=" " />
)

const Search = ({ className }) => icon(className, 'search')
const ChevronRight = ({ className }) => icon(className, 'chevronRight')
const LinkedIn = ({ className }) => icon(className, 'linkedin')
const YouTube = ({ className }) => icon(className, 'youtube')
const Facebook = ({ className }) => icon(className, 'facebook')
const Twitter = ({ className }) => icon(className, 'twitter')
const XIcon = ({ className }) => icon(className, 'xIcon')

const ChevronRightBlue = ({ className }) => iconPng(className, 'chevron')

export {
	Search,
	XIcon,
	ChevronRight,
	ChevronRightBlue,
	LinkedIn,
	Facebook,
	Twitter,
	YouTube,
}
