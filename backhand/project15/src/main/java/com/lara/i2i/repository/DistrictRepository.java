package com.lara.i2i.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.lara.i2i.entity.District;

public interface DistrictRepository extends CrudRepository<District, Integer>
{
	@Query(value="select * from district d where d.state_id = ?1", nativeQuery=true)
	public List<District> findDistrictsInOneState(Integer stateId);
}
