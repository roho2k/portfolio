import classNames from 'classnames';

export interface PaginationInterface {
	currentPage: number;
	totalPages: number;
	handlePagination: (page: number) => void;
}

export default function Pagination({
	handlePagination,
	totalPages,
	currentPage,
}: PaginationInterface) {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	return (
		<div>
			{pageNumbers.map((pageNumber) => {
				const isCurrentPage = currentPage === pageNumber;
				return (
					<button
						className={classNames(
							isCurrentPage &&
								'text-violet-400 border-b-2 border-violet-400',
							'font-bold px-1'
						)}
						key={pageNumber}
						onClick={() => handlePagination(pageNumber)}
					>
						{pageNumber}
					</button>
				);
			})}
		</div>
	);
}
