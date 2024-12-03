import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  let errorMessage = 'An unexpected error occurred.'

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || errorMessage
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <div style={styles.container}>
      <img
        src="Public/images/errorpage.png"
        alt="Error illustration"
        style={styles.image}
      />
      <h1 style={styles.title}>Oops! Something went wrong</h1>
      <p style={styles.message}>{errorMessage}</p>
      <button style={styles.button} onClick={() => navigate('/')}>
        Home
      </button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center' as const,
    padding: '20px',
  },
  image: {
    maxWidth: '400px',
    width: '100%',
    marginBottom: '20px',
    objectFit: 'contain',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    margin: '20px 0',
    fontWeight: 'bold',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  button: {
    padding: '12px 25px',
    backgroundColor: '#eab308',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
}

export default ErrorPage
