package com.sharenow.sharenowapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class SharenowapiApplication {
    public static void main(String[] args) {
        SpringApplication.run(SharenowapiApplication.class, args);
    }
}
