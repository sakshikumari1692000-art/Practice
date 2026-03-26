const Loader = () =>{
    return (
        <div style={styles.container}>
            <div style={styles.spinner}></div>
        </div>
    )
}

const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    },
    spinner: {
      width: "40px",
      height: "40px",
      border: "5px solid #ccc",
      borderTop: "5px solid #333",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
  };
  
  export default Loader;