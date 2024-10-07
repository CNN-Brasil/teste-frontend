/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import React, { useEffect, useState } from "react";
import DataSource from "./Services";

export default function Edit(props) {
	const [showAuthor, setShowAuthor] = useState(true);
	const [selectedLanguages, setSelectedLanguages] = useState([]);
	const source = new DataSource();

	const handleChange = (event) => {
		const values = Array.from(
			event.target.selectedOptions,
			(option) => option.value,
		);
		setSelectedLanguages(values);
		handleFetchBooks(values.join(","));
	};

	const handleFetchBooks = async (languages) => {
		const { next, previous, results } = await source.getBooks({
			page: 1,
			languages,
		});
		props.setAttributes({ result: results, next, previous });
	};

	useEffect(() => {
		handleFetchBooks();
	}, []);

	return (
		<div
			{...useBlockProps()}
			className=" wp-block-create-block-cnnbr-virtual-library w-screen"
		>
			<h1 className="mb-8 text-2xl font-semibold font-sans">
				{__("Biblioteca Virtual")}
			</h1>
			<form>
				<div className="p-4 max-w-sm mx-auto mb-8">
					<div className="flex items-center justify-between mb-4">
						<label
							htmlFor="show-author"
							className="text-base font-medium cursor-pointer"
						>
							Show Author's Name
						</label>
						<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
							<input
								type="checkbox"
								name="show-author"
								id="show-author"
								checked={showAuthor}
								onChange={(e) => {
									setShowAuthor(e.target.checked);
									props.setAttributes({ showAuthor: e.target.checked });
								}}
								className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out transform"
							/>
							<label
								htmlFor="show-author"
								className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer`}
							></label>
						</div>
					</div>
					<div className="bg-white p-4 rounded-lg shadow-md">
						<img
							className="h-48 w-36 object-contain mx-auto rounded"
							src="https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
							alt="Frankenstein; Or, The Modern Prometheus"
						/>
						<p
							className="text-base font-medium text-center mt-4 mb-1"
							title="Frankenstein; Or, The Modern Prometheus"
						>
							Frankenstein; Or, The Modern Prometheus
						</p>
						{showAuthor && (
							<p className="text-sm text-center text-gray-600">
								Shelley, Mary Wollstonecraft
							</p>
						)}
					</div>
				</div>
				<div className="p-4 max-w-sm mx-auto">
					<label
						htmlFor="language"
						className="block text-base font-medium cursor-pointer"
					>
						Languages
					</label>
					<select
						name="language"
						id="language"
						multiple
						value={selectedLanguages}
						onChange={handleChange}
						className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					>
						<option value="pt">Portuguese</option>
						<option value="fr">Franch</option>
						<option value="en">English</option>
					</select>
					<p className="mt-2 text-sm text-gray-500">
						Hold down the Ctrl (Windows) or Command (Mac) button to select
						multiple options.
					</p>
				</div>
			</form>
		</div>
	);
	return (
		<p {...useBlockProps()}>
			{__(
				"Cnnbr Virtual Library – hello from the editor!",
				"cnnbr-virtual-library",
			)}
		</p>
	);
}
