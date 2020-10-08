class Search {
  constructor(inputText, data) {
    this._inputText = inputText;
    this._data = data;
  }

  async searchResult() {
    const text = this._inputText.val().toLowerCase();
    return this._data.restaurants.filter((el) => el.name.toLowerCase().indexOf(text) > -1);
  }
}

export default Search;
