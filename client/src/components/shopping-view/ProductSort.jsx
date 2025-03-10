


function ProductSort({ sortOption, onSortChange }) {
  return (
    <div className="mb-4 flex justify-end items-center">
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 cursor-pointer bg-white"
      >
        <option value="lowest">Price: Low to High</option>
        <option value="highest">Price: High to Low</option>
      </select>
    </div>
  );
}

export default ProductSort;
