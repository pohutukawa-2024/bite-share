import { useIsFetching } from '@tanstack/react-query'

const GlobalLoader = () => {
  const isFetching = useIsFetching({
    predicate: (query) => query.queryKey[0] !== 'notifications',
  })

  if (isFetching === 0) return null // No fetching, hide the loader.

  return (
    <div style={styles.overlay}>
      <img src="/images/loading.gif" alt="Loading..." style={styles.gif} />
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight overlay to blend
  },
  gif: {
    width: '610px',
    height: '600px',
    mixBlendMode: 'multiply', // Blend gif with overlay color
  },
}
export default GlobalLoader
