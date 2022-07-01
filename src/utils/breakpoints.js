export const breakpoints = {
	small: '576px',
	medium: '768px',
	large: '992px',
	extraLarge: '1200px',
	extraExtraLarge: '1400px',
}

export const size = {
	sm: `(min-width: ${breakpoints.small})`,
	md: `(min-width: ${breakpoints.medium})`,
	lg: `(min-width: ${breakpoints.large})`,
	xl: `(min-width: ${breakpoints.extraLarge})`,
	xxl: `(min-width: ${breakpoints.extraExtraLarge})`,
}
