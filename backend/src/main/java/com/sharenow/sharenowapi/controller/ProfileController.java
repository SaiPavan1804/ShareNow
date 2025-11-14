package com.sharenow.sharenowapi.controller;

import com.sharenow.sharenowapi.dto.ProfileDTO;
import com.sharenow.sharenowapi.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class ProfileController {

    private final ProfileService profileService;

    @PostMapping("/register")
    public ResponseEntity<?> registerProfile(@RequestBody ProfileDTO profileDTO) {

        boolean exists = profileService.existsByClerkId(profileDTO.getClerkId());
        HttpStatus status = exists ? HttpStatus.OK : HttpStatus.CREATED;

        ProfileDTO savedProfile = profileService.createProfile(profileDTO);

        return ResponseEntity.status(status).body(savedProfile);
    }
}
