package com.sharenow.sharenowapi.repository;

import com.sharenow.sharenowapi.document.ProfileDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfileRepository extends MongoRepository<ProfileDocument, String> {

    ProfileDocument findByClerkId(String clerkId);
    boolean existsByClerkId(String clerkId);
}
