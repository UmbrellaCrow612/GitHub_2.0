interface FeedProps {}

export const Feed: React.FC<FeedProps> = () => {
  return (
    <div className="w-full px-4 border py-7 bg-[#F6F8FB]">
      <h3 className="w-full text-2xl font-semibold tracking-wide">
        The home for all developers — including you.
      </h3>
      <p className="mt-4 text-sm text-gray-500">
        Welcome to your personal dashboard, where you can find an introduction
        to how GitHub works, tools to help you build software, and help merging
        your first lines of code.
      </p>

      {/** Repo */}

      <div className="mt-3">
        <p className="text-base text-gray-800">Repositories</p>
        {/** Repos */}
        <div className="border-gray-100 border-[0.1em] bg-[#FFFFFF] shadow-sm rounded-sm mt-1 px-2 py-6">
          <input
            type="text"
            className="bg-[#F6F8FB] w-full border-[0.1em] border-[#CFD8DE] rounded-md px-3 py-1 placeholder:text-gray-500 placeholder:text-sm"
            placeholder="Find a repository..."
          />
        </div>
      </div>

      {/** Recent */}
      <div className="mt-6">
        <p className="text-base text-gray-800">Recent activity</p>
        {/** Repos */}
        <div className="border-gray-100 border-[0.1em] bg-[#FFFFFF] shadow-sm rounded-sm mt-1 px-2 py-2 flex items-center justify-center text-center">
          <p className="text-xs text-gray-500">
            When you take actions across GitHub, we&apos;ll provide links to
            that activity here.
          </p>
        </div>
      </div>
    </div>
  )
}
