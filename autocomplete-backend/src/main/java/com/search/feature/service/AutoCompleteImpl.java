package com.search.feature.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.search.feature.School;
import com.search.feature.dao.AutoCompleteDao;

@Service
public class AutoCompleteImpl implements AutoCompleteService {
	@Autowired
	AutoCompleteDao autoComplete;
	
	@Override
	public List<School> autoComplete(String keyword) {
		
		return autoComplete.search(keyword);
	}

}
