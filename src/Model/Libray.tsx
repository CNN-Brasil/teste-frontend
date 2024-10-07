export interface LibraryRequest {
	languages?: string;
	page?: number;
}

export interface LibraryResponse {
	count?: number;
	next: string;
	previous: string;
	results: LibraryItem[];
}

export interface LibraryItem {
	id: number;
	name: string;
	autorName: string[];
	coverImage: string;
	bookUrl: string;
}
