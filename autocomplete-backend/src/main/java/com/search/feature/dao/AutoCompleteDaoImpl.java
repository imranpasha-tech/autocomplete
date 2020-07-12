package com.search.feature.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import com.search.feature.School;


/**
 * Repository class performs all lookup operations in database.
 * @author imran.pasha
 *
 */
@Repository
public class AutoCompleteDaoImpl implements AutoCompleteDao {
	@Autowired
	NamedParameterJdbcTemplate template;  
	
	
	/**
	 *  Fetch all the matching records for the keyword using SQL pattern matching.
	 */
	@Override
	public List<School> search(String keyword) {
		String sql = "select city,rank,state  from schools where city LIKE :keyword order by city";
		Map<String,Object> params = new HashMap<String, Object>();
		params.put("keyword",  "%"+keyword+"%" );
		
		List<School> result = template.query(sql, params, new SchoolRowMapper());
		
		return result;
	}
	
	private static final class SchoolRowMapper implements RowMapper<School> {
        public School mapRow(ResultSet rs, int rowNum) throws SQLException {
        	School school = new School();
        	school.setCity(rs.getString("city"));
        	school.setRank(rs.getInt("rank"));
        	school.setState(rs.getString("state"));
            return school;
        }
    }

}
