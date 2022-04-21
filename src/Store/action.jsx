export function getCountries() {
  return (dispatch) => {
    dispatch({ type: "LOADER" });
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "COUNTRIES", payload: [...data] });

        dispatch({ type: "LOADER" });
      });
  };
}
