package com.search.feature.service;

import java.util.List;
import com.search.feature.School;

public interface AutoCompleteService {
	public List<School> autoComplete(String keyword);
}
