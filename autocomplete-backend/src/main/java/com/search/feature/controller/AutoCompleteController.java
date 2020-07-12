package com.search.feature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.search.feature.School;
import com.search.feature.service.AutoCompleteService;

/**
 * Feature that gives list of words as suggestions for autocomplete.
 * @author imran.pasha
 * 
 */
@RestController
public class AutoCompleteController {
	@Autowired
	AutoCompleteService autoComplete;
	
	/**
	 *  GET request method for finding all the matches of a keyword.
	 * 
	 * @param keyword	keyword is the pattern
	 * @return 			list of all the matching words for the keyword.
	 */
	@GetMapping("/autocomplete")
	public List<School> autoComplete(@RequestParam String keyword) {
		
		return autoComplete.autoComplete(keyword);
	}
}
