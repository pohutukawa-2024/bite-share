interface Props {
  children: React.ReactNode
}

function Background(props: Props) {
  return <div className="bg-yellow-500">{props.children}</div>
}

export default Background
