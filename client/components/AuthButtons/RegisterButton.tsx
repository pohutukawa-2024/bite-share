import { useAuth0 } from '@auth0/auth0-react'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signin',
        redirect_uri: `${window.location.origin}/addProfile`,
      },
    })
  }

  return (
    <button className="bg-blue-500" onClick={handleRegister}>
      Register
    </button>
  )
}

export default RegisterButton
