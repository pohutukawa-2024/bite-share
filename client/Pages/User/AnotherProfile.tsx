import useAnotherProfile from '../../hooks/useAnotherProfile'

function AnotherProfile() {
  const { data, isLoading, isError } = useAnotherProfile('user5')

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Sorry, an error has occurred</div>
  console.log(data?.user)

  if (data) {
    return (
      <>
        <p>This will be the profile page of another user</p>
        <p>{data.user.fullName}</p>
        <p>{data.user.id}</p>
        <p>{data.user.username}</p>
      </>
    )
  }
}

export default AnotherProfile
