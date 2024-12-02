import { useAuth0 } from '@auth0/auth0-react'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        redirect_uri: `${window.location.origin}/addProfile`,
      },
    })
  }

  return (
    <button
      className="flex items-center gap-1 rounded-2xl bg-white px-4 py-2 text-black"
      onClick={handleRegister}
    >
      Sign up
    </button>
  )
}

export default RegisterButton
