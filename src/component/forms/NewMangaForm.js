import React from 'react'

function NewMangaForm() {

    return (
        <div>
            <div class="flex justify-center">
                <div class="bg-indigo-400 w-4/5 h-64 border-2 mt-8 rounded-2xl focus-within:bg-indigo-800 transition-all focus-within:text-white">
                    <div class="m-8">

                        <form>
                            <label for="manganame">Manga Title:</label> <br />
                            <input type="text" class="rounded text-indigo-800 w-full focus:outline-none focus:ring focus:border-gray-100" id="moviename"></input>
                            <div class="flex justify-start space-x-5 mt-8">
                                <div class="flex justify-start space-x-2">
                                    <label for="mangachapter">Current Chapter:</label> <br />
                                    <input type="number" class="rounded text-indigo-800 w-20" id="mangachapter" min="1"></input>
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

export default NewMangaForm
