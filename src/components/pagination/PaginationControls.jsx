import { useDispatch } from "react-redux";
import PaginationButton from "./PaginationButton";
import { setPaginationPage } from "../../features/pagination/paginationSlice";

const PaginationControls = ({paginationPage, totalPages}) => {
    //Redux
    //Using to dispatch actions from the store
    const dispatch=useDispatch();

    return (
        <>
            <div className="flex justify-center mt-6 space-x-2">
                <PaginationButton
                    handleClick={() => dispatch( setPaginationPage(Math.max(1, paginationPage - 1)) )}
                    disabled={paginationPage === 1}
                >
                    Previous
                </PaginationButton>
                <span className="px-4 py-2">{paginationPage} / {totalPages}</span>
                <PaginationButton
                    handleClick={() => dispatch( setPaginationPage(Math.max(1, paginationPage + 1)) )}
                    disabled={paginationPage === totalPages}
                >
                    Next
                </PaginationButton>
            </div>
        </>
    );
};

export default PaginationControls;