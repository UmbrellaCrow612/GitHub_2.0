interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <input
      type="text"
      className="w-full h-full bg-[#24292F] border-[0.1em] border-[#57616A] rounded-md px-3 shadow-md placeholder:text-[#C8C9CB]"
      placeholder="Search or jump to"
    />
  )
}
