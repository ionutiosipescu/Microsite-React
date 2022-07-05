export const breakpoints = {
	small: '576px',
	medium: '768px',
	medium_m: "888px",
	large: '992px',
	extraLarge: '1200px',
	extraExtraLarge: '1400px',
}

export const size = {
	sm: `(min-width: ${breakpoints.small})`,
	md: `(min-width: ${breakpoints.medium})`,
	md_m: `(min-width: ${breakpoints.medium_m})`,
	lg: `(min-width: ${breakpoints.large})`,
	xl: `(min-width: ${breakpoints.extraLarge})`,
	xxl: `(min-width: ${breakpoints.extraExtraLarge})`,
}
export const sizem = {
	smm: `(max-width: ${breakpoints.small})`,
	mdm: `(max-width: ${breakpoints.medium})`,
	mdm_m: `(max-width: ${breakpoints.medium_m})`,
	lgm: `(max-width: ${breakpoints.large})`,
	xlm: `(max-width: ${breakpoints.extraLarge})`,
	xxlm: `(max-width: ${breakpoints.extraExtraLarge})`,
}
