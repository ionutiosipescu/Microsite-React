export const TEST = 'TEST'

export function test(payload) {
	return { type: TEST, payload }
}
