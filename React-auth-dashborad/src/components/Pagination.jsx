const Pagination = ({ page, setPage }) => {
    return (
      <>
        <button onClick={() => setPage((p) => p - 1)}>Prev</button>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </>
    );
  };
  
  export default Pagination;