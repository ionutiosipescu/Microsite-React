export const grabDataFromIncluded = (field, object, index) => {
	if (object.data[index].relationships[field].data) {
		const categoryId = object.data[index].relationships[field].data.id

		let value = object.included.find(item => item.id === categoryId).attributes

		value = getValue(field, value)

		return value
	}
	return null
}

const getValue = (field, value) => {
	if (['field_teaser_image'].includes(field)) {
		return value.uri.url
	} else if (['node_type'].includes(field)) {
		return value.name
	}
}
