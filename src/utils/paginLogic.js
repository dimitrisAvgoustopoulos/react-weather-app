export const paginLogic = (array, paginationPage) => {
  const ENTRIES_PER_PAGE = 4;

  // Pagination logic
  const totalPages = Math.ceil(array.length / ENTRIES_PER_PAGE);
  const startIdx = (paginationPage - 1) * ENTRIES_PER_PAGE;
  const paginatedData = array.slice(startIdx, startIdx + ENTRIES_PER_PAGE);

  return [totalPages, paginatedData];
};
