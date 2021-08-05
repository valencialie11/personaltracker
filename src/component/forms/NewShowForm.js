import React from "react";
import "@ui5/webcomponents/dist/DurationPicker.js";

function NewShowForm(props) {
  const { showsArray, setShowsArray } = props;

  const handleAddShow = () => {
    const showName = document.getElementById("showname").value;
    const showSeason = document.getElementById("showseason").value;
    const showEpisode = document.getElementById("showepisode").value;
    const showTimeStamp = document.getElementById("showtimestamp").value;

    const newShow = {
      name: showName,
      season: showSeason,
      episode: showEpisode,
      timestamp: showTimeStamp,
    };
    const tempShows = Object.assign([], showsArray);
    tempShows.push(newShow);
    setShowsArray(tempShows);
  };

  return (
    <div>
      <div class="flex justify-center">
        <div class="bg-yellow-200 w-4/5 h-64 border-2 mt-8 rounded-2xl focus-within:bg-yellow-400 transition-all">
          <div class="m-8">
            <form>
              <label for="showname">Show Title:</label> <br />
              <input
                type="text"
                class="rounded text-black w-full"
                id="showname"
              ></input>
              <div class="flex justify-start space-x-5 mt-8">
                <div class="flex justify-start space-x-2">
                  <label for="showseason">Current Season:</label> <br />
                  <input
                    type="number"
                    class="rounded text-black w-20"
                    id="showseason"
                    min="1"
                  ></input>
                </div>
                <div class="flex justify-start space-x-2">
                  <label for="showepisode">Current Episode:</label> <br />
                  <input
                    type="number"
                    class="rounded text-black w-20"
                    id="showepisode"
                    min="1"
                  ></input>
                </div>
                <div class="flex justify-start space-x-2">
                  <label for="showtimestamp">Current Timestamp:</label> <br />
                </div>
                <div>
                  <ui5-duration-picker
                    id="showtimestamp"
                    class="w-64 rounded text-black w-20"
                    value="00:00:00"
                  ></ui5-duration-picker>
                </div>
              </div>
            </form>
            <div class="mt-4 flex justify-end">
              <button
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={handleAddShow}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewShowForm;
