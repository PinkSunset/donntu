const config = {
	"backend": {
		"name": "gitlab",
		"repo": "devcustrom/evosiz",
		"branch": process.env.BRANCHDATA || "main",
		"auth_type": "pkce",
		"app_id": process.env.APPID,
		"commit_messages": {
			"create": 'Создано {{collection}} “{{slug}}”',
			"update": 'Обновлено {{collection}} “{{slug}}”',
			"delete": 'Удалено {{collection}} “{{slug}}”'
		}
	},
	"locale": "ru",
	"load_config_file": false,
	"media_folder": "public/images",
	"media_library": {
		"name": "cloudinary",
		"config": {
			"cloud_name": process.env.CLOUDINARY_NAME,
			"api_key": process.env.CLOUDINARY_KEY
		}
	},
	"collections": [

	]
}

export { config }
