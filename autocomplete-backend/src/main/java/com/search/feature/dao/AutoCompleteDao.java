package com.search.feature.dao;

import java.util.List;
import com.search.feature.School;

public interface AutoCompleteDao {
	public List<School> search(String keyword);
}
