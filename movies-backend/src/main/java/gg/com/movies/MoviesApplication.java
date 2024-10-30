//this is the main class where all the code runs

package gg.com.movies;


// call run method from spring application package to run the project
import org.springframework.boot.SpringApplication; 

import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController 							//lets the framework know, this is a REST api controller
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);}

}
