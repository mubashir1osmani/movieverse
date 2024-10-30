//this class does the heavy lifting, sending requests to the backend, does not write to the db but refers to it

package gg.com.movies;

import java.util.List;
import java.util.Optional;

// import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    //here we listed all the movies in our database cluster
    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }

    
    //find movie by its "imdbId" property in the database

    public Optional<Movie> singleMovie(String imdbId) {
        return movieRepository.findByImdbId(imdbId);
    }


}
