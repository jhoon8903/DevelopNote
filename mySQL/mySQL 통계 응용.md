
#mySQL #server #백엔드 

# WHERE / GROUP BY / ORDER BY 혼합 사용

1. '웹개발 종합반'의 결제수단별, 주문건수 
	ELECT course_title, payment_method, COUNT(payment_method) FROM orders
	WHERE course_title = '웹개발 종합반' GROUP BY payment_method
	ORDER BY payment_method
![](https://i.imgur.com/oD4OHxN.png)

2. Gamail 을 사용하는 성씨별 회원수
   
3. COURSE 별 '오늘의 다짐'에 달린 like 갯수 