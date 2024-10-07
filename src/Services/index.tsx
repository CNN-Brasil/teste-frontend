import { LibraryRequest, LibraryResponse } from "../Model/Libray";

export default class BookService {
	private url: string;

	constructor() {
		this.url = `https://gutendex.com/books`;
	}

	public async getBooks(
		params: LibraryRequest,
	): Promise<LibraryResponse | undefined> {
		try {
			const response = await fetch(
				`${this.url}${params.page ? `?page=${params.page}` : ""}${
					params.languages
						? `${params.page ? "&" : "?"}languages=${params.languages}`
						: ""
				}`,
				{
					method: "GET",
				},
			);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const body = await response.json();
			return {
				count: body.count,
				next: body.next,
				previous: body.previous,
				results: body.results.map((item: any) => ({
					id: item.id,
					name: item.title,
					autorName: item.authors.map((autor: any) => autor.name),
					coverImage: item.formats["image/jpeg"],
					bookUrl: item.formats["text/html"],
				})),
			};
		} catch (error: any) {
			console.error(error.message);
			return { count: 0, next: "", previous: "", results: [] };
		}
	}
}
