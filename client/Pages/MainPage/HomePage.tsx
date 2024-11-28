import LoginButton from '../../components/AuthButtons/LoginButton'
import RegisterButton from '../../components/AuthButtons/RegisterButton'

function HomePage() {
  return (
    <>
      <h1>This will be the home page</h1>
      <p>
        Placing the two buttons here, HS, feel free to move and style them as
        you see fit
      </p>
      <div className="flex gap-2">
        <LoginButton />
        <RegisterButton />
      </div>
    </>
  )
}

export default HomePage
