package com.ssafy.showeat.domain.funding.service;

import com.ssafy.showeat.domain.funding.dto.request.CreateFundingRequestDto;

public interface FundingService {
	void createFunding(CreateFundingRequestDto createFundingRequestDto);
}