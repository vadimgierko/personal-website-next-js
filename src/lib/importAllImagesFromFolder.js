// import img from "../public/visual-notes-gallery"

export function importAllImagesFromFolder(r) {
	let images = {};
	r.keys().forEach((item, index) => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}
