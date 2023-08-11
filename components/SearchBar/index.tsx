import { SearchbarProps } from "@/types";

const SearchBar = ({ formStyles, handleSubmit }: SearchbarProps) => {
  return (
    <form className={`searchbar ${formStyles}`} onSubmit={handleSubmit}></form>
  );
};

export default SearchBar;
