import CMS from 'netlify-cms'
import { Widget as IdWidget } from '@ncwidgets/id'
// import Post from "../admin/preview-templates/post.js";
// import Page from "../admin/preview-templates/page.js"
import { config } from "./config.js"

export default new class  {
  constructor() {
	// this.previewTemplate = [
	//   {
	// 	name : "blog",
	// 	component : Post
	//   },
	//   {
	// 	name : "pages",
	// 	component : Page
	//   },
	// ]
	this.previewStyle = "/assets/css/style.css"
	this.handler();
  }

  async getHtml() {
	return await (await fetch("/")).text()
  }

  handler() {
	// const rpt = this.previewTemplate
	// rpt.forEach(item => {
	//   CMS.registerPreviewTemplate(item.name, item.component)
	// })
	CMS.registerWidget(IdWidget)
	CMS.registerPreviewStyle(this.previewStyle)
	let html = this.getHtml()
	const f = document.createElement("html");
	f.innerHTML = html;
	Array.from(f.getElementsByTagName("link")).forEach(tag => {
		if (tag.rel == "stylesheet" && !tag.media) {
			CMS.registerPreviewStyle(tag.href);
		}
	})

	CMS.init({config})
	// CMS.registerMediaLibrary(uploadcare);
  }
}

