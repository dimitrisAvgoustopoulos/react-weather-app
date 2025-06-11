const PaginationButton = ({ handleClick, disabled, children }) => (
    <button
        className="px-4 py-2 bg-white rounded-full shadow disabled:opacity-50 enabled:cursor-pointer"
        onClick={handleClick}
        disabled={disabled}
    >
        {children}
    </button>
);
export default PaginationButton;