import React from 'react'
import "@ui5/webcomponents/dist/DurationPicker.js"

function NewMovieForm() {

    return (
        <div>
            <div class="flex justify-center">
                <div class="bg-red-300 w-4/5 h-64 border-2 mt-8 rounded-2xl focus-within:bg-red-800 transition-all focus-within:text-white">
                    <div class="m-8">

                        <form>
                            <label for="moviename">Movie Title:</label> <br />
                            <input type="text" class="rounded text-red-800 w-full focus:outline-none focus:ring focus:border-gray-100 " id="moviename"></input>
                            <div class="flex justify-start space-x-5 mt-8">
                                <div class="flex justify-start space-x-2">
                                    <label for="movietimestamp">Current Timestamp:</label> <br />
                                </div>
                                <div>
                                    <ui5-duration-picker class="w-64 rounded text-red-800 w-20" value="00:00:00"></ui5-duration-picker>
                                </div>

                            </div>


                        </form>
                        <div class="mt-4 flex justify-end">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                                <span>Add</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMovieForm
