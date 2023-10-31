package com.ssafy.showeat.domain.payment.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentSuccessCardDto {
	String company;                // 회사명
	String number;                    // 카드번호
	String installmentPlanMonths;    // 할부 개월
	String isInterestFree;            // 무이자 여부
	String approveNo;                // 승인번호
	String useCardPoint;            // 카드 포인트 사용 여부
	String cardType;                // 카드 타입
	String ownerType;                // 소유자 타입
	String acquireStatus;            // 승인 상태
	String receiptUrl;                // 영수증 URL
}