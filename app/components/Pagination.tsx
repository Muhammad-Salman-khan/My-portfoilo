type PaginationData = {
  totalPage: number;
  currentPage: number;
  onPageChange: (e: number) => void;
};
const Pagination = ({
  totalPage,
  onPageChange,
  currentPage,
}: PaginationData) => {
  if (totalPage <= 1) return;
  return (
    <div className="flex gap-2 justify-center align-middle items-center">
      {Array.from({ length: totalPage + 1 }, (_, idx) => (
        <button
          key={idx + 1}
          className={`px-3 py-1 rounded-md text-white coursor-pointer ${
            currentPage === idx + 1 ? " bg-blue-600 " : "bg-gray-800"
          }`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
