import { useState } from "react";

const Locations = ["Edmonton", "Calgary", "Vancouver", "Toronto"];

export const WeatherApp = () => {
  const [value, setValue] = useState("");
  const [filteredLocations, setfilteredLocations] = useState<[]>([]);
  const [active, setMessage] = useState({ name: "", weather: "" });
  const [lists, setLists] = useState([]);
  // Function to add a new location
  const handleClick = (e, loc: string) => {
    setMessage({ name: "", weather: "" });
    e.preventDefault();
    if (loc == "Edmonton") {
      setMessage({ name: loc, weather: "Cold Gloomy" });
    }
    setValue("");
    setfilteredLocations([]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setfilteredLocations([]);

    const newValue = e.target.value;
    setValue(newValue); // Update the state with the new value

    // Split the value into individual characters (remove any non-alphabetic characters if needed)
    const valueChars = newValue
      .toLowerCase()
      .split("")
      .filter((char) => char.match(/[a-z]/));

    // Filter locations based on whether the location contains all the characters in the input
    const filtered = Locations.filter((location: string) => {
      const normalizedLocation = location.toLowerCase();

      // Check if every character in valueChars is present in the normalized location
      return valueChars.every((char) => normalizedLocation.includes(char));
    });
    console.log(filtered);
    setfilteredLocations(filtered);
  };
  const addCity = (name) => {
    setLists([...lists, name]);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-5 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full p-2 bg-opacity-75">
            <h1 className="text-right text-pink-100  font-extrabold text-xl m-10">
              {active.name}{" "}
              <button
                onClick={() => addCity(active.weather)}
                className=" text-pink-200 text-sm text-right border-l-fuchsia-950"
              >
                +Add
              </button>
            </h1>
            <h1 className="text-right text-pink-100  font-extrabold text-4xl m-10">
              {active.weather}
            </h1>
          </div>
          <img
            className="h-56 w-full object-fill"
            src="https://images.pexels.com/photos/2719301/pexels-photo-2719301.jpeg"
            alt="Modern building architecture"
          />
        </div>

        <div className=" border-gray-100 h-80 w-full border-l-fuchsia-950">
          <div
            className="rounded-md shadow-lg shadow-black
           border-l-pink-950 bg-pink-200  w-auto mt-1"
          >
            <input
              type="text"
              name="value"
              value={value}
              placeholder="Enter city, state"
              onChange={(e) => handleChange(e)}
              className="block w-full border-0 bg-transparent py-4
               pl-2 placeholder:text-pink-950  sm:text-lg"
            />
            <div
              className="rounded-md shadow-lg
                     bg-gray-100 w-auto m-auto mt-1"
            >
              {filteredLocations &&
                filteredLocations.map((location, index) => (
                  <a href="" key={index}>
                    <li
                      className=" list-none text-center font-bold p-4"
                      onClick={(e) => handleClick(e, location)}
                    >
                      {location}
                    </li>
                  </a>
                ))}
            </div>
          </div>
        </div>

        <div className=" border-gray-100 h-80 w-full border-l-fuchsia-950">
          {lists && lists.map((list) => <li>{list}</li>)}
        </div>
      </div>
    </>
  );
};
