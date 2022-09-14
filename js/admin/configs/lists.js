import { index } from '../../admin/configs/files/index'
import { tables } from '../../admin/configs/files/tables'
import { links } from '../../admin/configs/files/links'

const lists = {
	"label": 'Данные',
	"name": 'lists',
	"files": [
		index,
		tables,
		links
	]
}

export { lists }
