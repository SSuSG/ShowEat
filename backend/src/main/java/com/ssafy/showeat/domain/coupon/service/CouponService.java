package com.ssafy.showeat.domain.coupon.service;

import com.ssafy.showeat.domain.coupon.dto.request.UpdateCouponPriceRequestDto;
import com.ssafy.showeat.domain.coupon.dto.request.UpdateCouponStatusRequestDto;
import com.ssafy.showeat.domain.coupon.dto.response.CouponPageResponseDto;
import com.ssafy.showeat.domain.coupon.dto.response.CouponResponseDto;
import com.ssafy.showeat.domain.coupon.entity.CouponStatus;
import com.ssafy.showeat.domain.funding.entity.Funding;
import com.ssafy.showeat.domain.user.entity.User;

public interface CouponService {
	CouponPageResponseDto getCouponListByUserIdAndStatus(Long userId, CouponStatus status, int page);

	CouponResponseDto getCouponDetailByCouponId(Long couponId);

	void updateCouponStatus(UpdateCouponStatusRequestDto updateCouponStatusRequestDto);

	void updateCouponPrice(UpdateCouponPriceRequestDto updateCouponPriceRequestDto);
	void updateCouponStatusByOwner(Long couponId , User user);
	void createCoupon(Funding funding);
}
