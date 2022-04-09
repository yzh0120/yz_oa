<1> @media   (min-width: 400px) and (max-width: 500px) {
	   div.example {
		 display: none;
	   }
	 }
	and两边必须有空格
	
	
<2> 我们用min-width时，小的放上面大的在下面，同理如果是用max-width那么就是大的在上面，小的在下面
	1	@media (min-width: 768px){ //>=768的设备 }
		
		@media (min-width: 992px){ //>=992的设备 }
		
		@media (min-width: 1200){ //>=1200的设备 }
		
	
	2	@media (max-width: 1199){ //<=1199的设备 }
		
		@media (max-width: 991px){ //<=991的设备 }
		
		@media (max-width: 767px){ //<=768的设备 }