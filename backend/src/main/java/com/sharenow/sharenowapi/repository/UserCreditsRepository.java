package com.sharenow.sharenowapi.repository;

import com.sharenow.sharenowapi.document.UserCredits;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserCreditsRepository extends MongoRepository<UserCredits, String> {

}
