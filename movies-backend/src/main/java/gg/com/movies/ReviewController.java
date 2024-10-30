package gg.com.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map; // Corrected import for Map

@RestController     //rest api
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    //gonna be in the movie page
    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(
            reviewService.createReview(payload.get("reviewBody"), payload.get("imdbId")), 
            HttpStatus.CREATED);
    }
}