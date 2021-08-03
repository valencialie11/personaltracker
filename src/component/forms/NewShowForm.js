import React from 'react'
import "@ui5/webcomponents/dist/DurationPicker.js"

function NewShowForm() {

    return (
        <div>
            <div class="flex justify-center">
                <div class="bg-gray-200 w-4/5 h-52 border-2 mt-8 rounded-2xl">
                    <div class="m-8">

                        <form>
                            <label for="fname">Show Title:</label> <br />
                            <input type="text" class="rounded text-pink-500 w-full" id="fname"></input>
                            <div class="flex justify-start space-x-5 mt-8">
                                <div class="flex justify-start space-x-2">
                                    <label for="season">Current Season:</label> <br />
                                    <input type="number" class="rounded text-pink-500 w-20" id="season" min="1"></input>
                                </div>
                                <div class="flex justify-start space-x-2">
                                    <label for="episode">Current Episode:</label> <br />
                                    <input type="number" class="rounded text-pink-500 w-20" id="episode" min="1"></input>
                                </div>
                                <div class="flex justify-start space-x-2">
                                    <label for="timestamp">Current Timestamp:</label> <br />
                                </div>
                                <div>
                                    <ui5-duration-picker class="w-64 rounded text-pink-500 w-20" value="00:00:00"></ui5-duration-picker>
                                </div>

                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewShowForm
