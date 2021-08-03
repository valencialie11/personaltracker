import React from 'react'

function NewShowForm() {
    let durationIn = document.getElementById("timestamp");
    let resultP = document.getElementById("output");

    durationIn.addEventListener("change", function (e) {
        resultP.textContent = "";
        durationIn.checkValidity();
    });

    durationIn.addEventListener("invalid", function (e) {
        resultP.textContent = "Invalid input";
    });

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
                                    <input type="text" required pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}" value="00:00:00" class="rounded text-pink-500 w-32" id="timestamp" ></input>
                                    <p id="output"></p>
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
