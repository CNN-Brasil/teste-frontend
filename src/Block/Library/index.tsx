import React, { useState } from "react";

const Library = (props: any) => {
	const [books, setBooks] = useState(props.result.slice(0, 8));
	const [page, setPage] = useState(1);

	const getMoreBooks = () => {
		setBooks(props.result.slice(page * 8, (page + 1) * 8));
		setPage(page + 1);
	};
	return (
		<div className="scroll-smooth alignfull wp-block-create-block-cnnbr-virtual-library w-screen">
			<div className="relative max-w-4xl my-0 mx-auto font-sans">
				<h1 className="text-2xl font-semibold font-sans mb-10">
					Biblioteca Virtual
				</h1>
				<>
					<div className="w-96 aspect-square bg-tertiary absolute z-[-1] -rotate-[61deg] top-[90px] -left-[170px]"></div>
					<section className="grid gap-5 grid-cols-[repeat(8,minmax(210px,1fr))] overflow-x-auto lg:grid-cols-4">
						{(books || []).map((book: any) => (
							<div
								className="bg-white w-52 py-5 rounded flex items-center flex-col justify-center"
								key={book.id}
							>
								<img
									className="h-[12.5rem] w-[9rem] object-contain rounded"
									src={book.coverImage}
									alt={book.name}
								/>
								<p
									className="text-base truncate font-medium w-[7.75rem] text-center mb-1 mt-4"
									title={book.name}
								>
									{book.name}
								</p>
								{props.showAuthor && (
									<p className="text-sm truncate text-center mb-4">
										{book.autorName}
									</p>
								)}
								<button
									className="bg-secondary text-white py-2 px-7 rounded cursor-pointer"
									onClick={() => window.open(book.bookUrl, "_blank")}
								>
									Ler Online
								</button>
							</div>
						))}
					</section>
					{page < 4 && (
						<button
							className="bg-primary text-white py-2 px-7 rounded mt-8 w-[21.5rem] text-center cursor-pointer"
							onClick={getMoreBooks}
						>
							Carregar Mais
						</button>
					)}
				</>
			</div>
		</div>
	);
};

export default Library;
