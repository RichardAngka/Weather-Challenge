interface SearchBoxPropsType {
  inputText: string;
  setInputText: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxPropsType> = ({
  inputText,
  setInputText,
}) => {
  let inputHandler = (e: { target: { value: string } }) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="pb-2 text-xl">
      <h1 className="pb-2">Search City</h1>
      <input
        className="border-solid border-2 border-sky-500 rounded-lg p-2"
        placeholder="Search City"
        onChange={inputHandler}
        value={inputText}
      />
      {/* {inputText.length !== 0 && <List input={inputText} />} */}
      {/* <button
        className="bg-slate-200 p-2 ml-2 rounded-md"
      >
        Submit
      </button> */}
    </div>
  );
};

export default SearchBox;
