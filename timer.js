function odliczanie()
	{
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		var rok = dzisiaj.getFullYear();
		
		document.getElementById("clock").innerHTML = 

		 
		 rok+"-"+miesiac+"-"+dzien;
		 
		 setTimeout("odliczanie()",1000);
	}