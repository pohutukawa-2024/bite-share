import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/`,
      },
    })
  }
  return (
    <button className="bg-red-500" onClick={handleLogin}>
      Log In
    </button>
  )
}

export default LoginButton
