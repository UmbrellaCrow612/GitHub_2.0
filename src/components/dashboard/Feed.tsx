interface FeedProps {}

export const Feed: React.FC<FeedProps> = () => {
  return (
    <div className="w-full px-4 border border-orange-400 py-7">
      <h3 className="w-full text-2xl font-semibold tracking-wide">
        The home for all developers — including you.
      </h3>
      <p className="mt-4 text-sm text-gray-500">
        Welcome to your personal dashboard, where you can find an introduction
        to how GitHub works, tools to help you build software, and help merging
        your first lines of code.
      </p>
    </div>
  )
}
