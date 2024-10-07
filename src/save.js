/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

import Library from "./Block/Library";
import ReactDOM from "react-dom/client";

export default function save() {
	const divsToUpdate = document.querySelectorAll(".update-me");

	divsToUpdate.forEach((div) => {
		const preElement = div.querySelector("pre");

		if (preElement !== null) {
			const data = JSON.parse(preElement.innerText);
			const root = ReactDOM.createRoot(div);
			root.render(<Library {...data} />);
			div.classList.remove("update-me");
		}
	});
}

save();
