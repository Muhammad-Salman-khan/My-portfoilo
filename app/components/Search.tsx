type SearchedQuery = {
  seachQuery: string;
  onSearchChange: (value: string) => void;
};

const Search = ({ seachQuery, onSearchChange }: SearchedQuery) => {
  return (
    <>
      <div className=" m-4 rounded-md max-w-3xl mx-auto mb-4 px-6 py-6 ">
        <input
          type="text"
          value={seachQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search any blog"
          className="
          w-full h-9 9 p-5
          bg-neutral-900
          text-neutral-100
          placeholder:text-neutral-500
          border border-neutral-700
          rounded-lg
          transition-all
          focus:outline-none
          focus:ring-2 focus:ring-sky-400
          focus:border-sky-400
        "
        />
      </div>
    </>
  );
};

export default Search;
