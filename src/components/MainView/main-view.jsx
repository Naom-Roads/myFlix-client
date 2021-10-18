import React from 'react';
import {MovieCard} from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';

export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    _id: 1,
                    Title: 'Jojo Rabbit',
                    Description: 'A young German boy in the Hitler Youth whose hero and imaginary friend is the country\'s dictator is shocked to discover that his mother is hiding a Jewish girl in their home.',
                    Genres: 'Adventure',
                    Director: 'Taika Waititi',
                    ImagePath: './images/jojorabbit.png'
                },
                {
                    _id: 2,
                    Title: 'Fantastic Mr.Fox',
                    Description: 'An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers\' retaliation.',
                    Director: 'Wes Anderson',
                    Genres: ['Animation', 'Adventure' ],
                    ImagePath: 'src/images/fantasticmrfox.png'
                },
                {
                    _id: 3,
                    Title: 'Spirited Away',
                    Description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
                    Director: 'Hayao Miyazaki',
                    Genres: ['Adventure', 'Animation'],
                    ImagePath: './images/spiritedaway.png'
                }
            ],
            selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const {movies, selectedMovie} = this.state;

        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {selectedMovie ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => {
                    this.setSelectedMovie(newSelectedMovie);
                }}/> : movies.map(movie =>
                    (<MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => {
                            this.setSelectedMovie(movie)
                        }}/>
                    ))
                }
            </div>
        );
    }
}