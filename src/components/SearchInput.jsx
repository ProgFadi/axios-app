import TextField from '@mui/material/TextField';

const SearchInput = ({ handleSearch, searchValue }) => {
  return (
    <div>
      <TextField
        label="Search Products"
        variant="filled"
        className="input"
        type="text"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
