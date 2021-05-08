package com.example.ticketmaster.backend;

import com.example.ticketmaster.backend.model.Event;
import com.example.ticketmaster.backend.model.User;
import com.example.ticketmaster.backend.repository.EventRepository;
import com.example.ticketmaster.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.time.Instant;
import java.util.Collections;

@SpringBootApplication
@EnableSwagger2
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner init(EventRepository eventRepo, UserRepository userRepo){
		return args -> {

		    Event event1 = createEvent(eventRepo, "#117", "2021-05-10T17:00:00.000Z");
            Event event2 = createEvent(eventRepo, "#143", "2021-05-20T17:00:00.000Z");
            Event event3 = createEvent(eventRepo, "#343", "2021-06-05T17:00:00.000Z");
            Event event4 = createEvent(eventRepo, "#420", "2021-07-19T17:00:00.000Z");
            Event event5 = createEvent(eventRepo, "#555", "2021-07-21T17:00:00.000Z");
            Event event6 = createEvent(eventRepo, "#690", "2021-08-30T17:00:00.000Z");
            Event event7 = createEvent(eventRepo, "#777", "2021-09-09T17:00:00.000Z");
            Event event8 = createEvent(eventRepo, "#808", "2021-10-03T17:00:00.000Z");
            Event event9 = createEvent(eventRepo, "#999", "2021-11-11T17:00:00.000Z");
		    User user = createUser(userRepo, event1, "Sair", "Abbas", "sairabbas@gmail.com", 24);
		};
	}

    private Event createEvent(EventRepository eventRepo, String name, String time) {
        Instant instant = Instant.parse(time);
        Event event = new Event();

        event.setName(name);
        event.setEvent_date(instant);
        return eventRepo.save(event);
    }

    private User createUser(UserRepository userRepo, Event event, String f_name, String l_name, String email, int age) {
        User user = new User();

        user.setFirst_name(f_name);
        user.setLast_name(l_name);
        user.setAge(age);
        user.setEmail(email);
        user.setEvent(event);
        return userRepo.save(user);
    }

	@Bean
    public Docket swaggerConfiguration() {

	    return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .build()
                .apiInfo(apiDetails());
    }

    private ApiInfo apiDetails() {
	    return new ApiInfo(
	            "Ticket Master Backend API",
                "Sample API for personal project",
                "1.0",
                "Free to use",
                new springfox.documentation.service.Contact("Asim Ghani", "ghaniasim@github.io", "asim.ghani@metropolia.fi"),
                "API License",
                "",
                Collections.emptyList());
    }
}
