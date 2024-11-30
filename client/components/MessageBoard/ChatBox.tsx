import useGetMessages from '../../hooks/useGetMessages'

interface Props {
  matchId: number
}

export default function ChatBox({ matchId }: Props) {
  const { data, isLoading, isError } = useGetMessages(matchId)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Sorry! An error has occurred.</div>

  if (matchId === 0) {
    return (
      <section className="h-full w-4/5 rounded-lg bg-gray-100">
        <h1 className="text-center">Chat with Other Person</h1>
      </section>
    )
  } else {
    return (
      <section className="h-full w-4/5 rounded-lg bg-gray-100">
        <h1 className="text-center">Chat with Other Person</h1>
        <div>
          <div className="flex justify-end">
            <p className="pb-21 m-2 rounded-md bg-green-400 pl-3 pr-3 pt-1">
              Hello
            </p>
          </div>
          <div className="flex justify-start">
            <p className="m-2 rounded-md bg-gray-300 pb-1 pl-3 pr-3 pt-1">Yo</p>
          </div>
          <p>{`${matchId}`}</p>
        </div>
      </section>
    )
  }
}
