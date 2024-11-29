function MatchesPage() {
  return (
    <div className="m-16 flex justify-center">
      <div className="flex w-3/5 ">
        <section className="w-1/5">
          <p>This will be the ChatBubble</p>
          <div>
            <button className="m-3 h-24 w-24 rounded-full bg-gray-100">
              GS
            </button>
          </div>
          <div>
            <button className="m-3 h-24 w-24 rounded-full bg-gray-50">
              HS
            </button>
          </div>
          <div>
            <button className="m-3 h-24 w-24 rounded-full bg-gray-50">
              LS
            </button>
          </div>
        </section>
        <section className="w-4/5 bg-gray-100">
          <p>This will be the ChatBox</p>
        </section>
      </div>
    </div>
  )
}

export default MatchesPage
