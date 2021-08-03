import React from 'react'
import NewShowForm from '../component/forms/NewShowForm'
import NewMovieForm from '../component/forms/NewMovieForm'
import NewMangaForm from '../component/forms/NewMangaForm'

function MainPage() {
    return (
        <div class="bg-discordbg">
            <NewShowForm />
            <NewMovieForm />
            <NewMangaForm />
        </div>
    )
}

export default MainPage
