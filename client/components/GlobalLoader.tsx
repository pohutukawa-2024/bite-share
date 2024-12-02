import { useIsFetching } from "@tanstack/react-query";

const GlobalLoader = () => {
  const isFetching = useIsFetching();

  if (isFetching === 0) return null; // No fetching, hide the loader.

  return (
    <div style={styles.overlay}>
      <img src="Public/images/loading.gif" alt="Loading..." style={styles.gif} />
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background.
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  gif: {
    width: "100px", // Adjust size as needed.
    height: "100px",
  },
};

export default GlobalLoader;
