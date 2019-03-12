function clickem(elem){
	let color = elem.getAttribute("data-color");
	let selected = elem.getAttribute("data-select");
	let komsu = elem.getAttribute("class");

	if((color==="uncolored" && selected==="unselected")){
		let path = elem.getElementsByTagName("path")[0].attributes;
		if(path.length===2){
			elem.getElementsByTagName("path")[0].attributes[0].nodeValue = '#FFFFFF';
		} else {
			elem.getElementsByTagName("path")[0].attributes[2].nodeValue = '#FFFFFF';
		}	
		elem.setAttribute("data-color","#FFFFFF");
		elem.setAttribute("data-select","lastselected");

		let city = elem.getAttribute("id");

		if(city==="van"){
			document.getElementById("agri").setAttribute("class","komsu");
			document.getElementById("bitlis").setAttribute("class","komsu");
			document.getElementById("siirt").setAttribute("class","komsu");
			document.getElementById("sirnak").setAttribute("class","komsu");
			document.getElementById("van-golu").setAttribute("class","komsu");
			document.getElementById("hakkari").setAttribute("class","komsu");
		}

		if(city==="sanliurfa"){
			document.getElementById("mardin").setAttribute("class","komsu");
			document.getElementById("diyarbakir").setAttribute("class","komsu");
			document.getElementById("adiyaman").setAttribute("class","komsu");
			document.getElementById("gaziantep").setAttribute("class","komsu");
		} 

		if(city==="sirnak"){
			document.getElementById("siirt").setAttribute("class","komsu");
			document.getElementById("van").setAttribute("class","komsu");
			document.getElementById("hakkari").setAttribute("class","komsu");
			document.getElementById("mardin").setAttribute("class","komsu");
		} 

		if(city==="antalya"){
			document.getElementById("mersin").setAttribute("class","komsu");
			document.getElementById("karaman").setAttribute("class","komsu");
			document.getElementById("konya").setAttribute("class","komsu");
			document.getElementById("isparta").setAttribute("class","komsu");
			document.getElementById("burdur").setAttribute("class","komsu");
			document.getElementById("mugla").setAttribute("class","komsu");
		}

		if(city==="mersin"){
			document.getElementById("antalya").setAttribute("class","komsu");
			document.getElementById("karaman").setAttribute("class","komsu");
			document.getElementById("konya").setAttribute("class","komsu");
			document.getElementById("nigde").setAttribute("class","komsu");
			document.getElementById("adana").setAttribute("class","komsu");
		}

		if(city==="adana"){
			document.getElementById("mersin").setAttribute("class","komsu");
			document.getElementById("hatay").setAttribute("class","komsu");
			document.getElementById("osmaniye").setAttribute("class","komsu");
			document.getElementById("kahraman-maras").setAttribute("class","komsu");
			document.getElementById("kayseri").setAttribute("class","komsu");
			document.getElementById("nigde").setAttribute("class","komsu");
		}

		if(city==="kastamonu"){
			document.getElementById("mersin").setAttribute("class","komsu");
			document.getElementById("sinop").setAttribute("class","komsu");
			document.getElementById("bartin").setAttribute("class","komsu");
			document.getElementById("karabuk").setAttribute("class","komsu");
			document.getElementById("cankiri").setAttribute("class","komsu");
			document.getElementById("corum").setAttribute("class","komsu");
		}

		if(city==="mugla"){
			document.getElementById("antalya").setAttribute("class","komsu");
			document.getElementById("burdur").setAttribute("class","komsu");
			document.getElementById("denizli").setAttribute("class","komsu");
			document.getElementById("aydin").setAttribute("class","komsu");
		}

		if(city==="izmir"){
			document.getElementById("aydin").setAttribute("class","komsu");
			document.getElementById("manisa").setAttribute("class","komsu");
			document.getElementById("balikesir").setAttribute("class","komsu");
		} 

		if(city==="balikesir"){
			document.getElementById("izmir").setAttribute("class","komsu");
			document.getElementById("manisa").setAttribute("class","komsu");
			document.getElementById("kutahya").setAttribute("class","komsu");
			document.getElementById("canakkale2").setAttribute("class","komsu");
			document.getElementById("bursa").setAttribute("class","komsu");
		}

		if(city==="agri"){
			document.getElementById("van").setAttribute( "class","komsu" );
		document.getElementById("mus").setAttribute( "class","komsu" );
		document.getElementById("bitlis").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );
		document.getElementById("kars").setAttribute( "class","komsu" );
		document.getElementById("igdir").setAttribute( "class","komsu" );
		document.getElementById("van-golu").setAttribute( "class","komsu" );

		
		}
		if(city==="bursa"){
			document.getElementById("yalova").setAttribute( "class","komsu" );
		document.getElementById("balikesir").setAttribute( "class","komsu" );
		document.getElementById("kocaeli").setAttribute( "class","komsu" );
		document.getElementById("sakarya").setAttribute( "class","komsu" );
		document.getElementById("bilecik").setAttribute( "class","komsu" );
		document.getElementById("kutahya").setAttribute( "class","komsu" );


		
		}
		if(city==="mardin"){
			document.getElementById("sirnak").setAttribute( "class","komsu" );
		document.getElementById("siirt").setAttribute( "class","komsu" );
		document.getElementById("batman").setAttribute( "class","komsu" );
		document.getElementById("diyarbakir").setAttribute( "class","komsu" );
		document.getElementById("sanliurfa").setAttribute( "class","komsu" );

		
		}
		if(city==="canakkale2"){
			document.getElementById("balikesir").setAttribute( "class","komsu" );
		document.getElementById("tekirdag").setAttribute( "class","komsu" );
		document.getElementById("edirne").setAttribute( "class","komsu" );
		document.getElementById("canakkale1").setAttribute( "class","komsu" );


		
		}
		if(city==="artvin"){
			document.getElementById("rize").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );
		document.getElementById("ardahan").setAttribute( "class","komsu" );

		
		}
		if(city==="edirne"){
			document.getElementById("kirklareli").setAttribute( "class","komsu" );
		document.getElementById("tekirdag").setAttribute( "class","komsu" );
		document.getElementById("canakkale1").setAttribute( "class","komsu" );
		
		
		}
		if(city==="samsun"){
			document.getElementById("sinop").setAttribute( "class","komsu" );
		document.getElementById("amasya").setAttribute( "class","komsu" );
		document.getElementById("corum").setAttribute( "class","komsu" );
		document.getElementById("tokat").setAttribute( "class","komsu" );
		document.getElementById("ordu").setAttribute( "class","komsu" );

		
		}
		if(city==="ardahan"){
			document.getElementById("artvin").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );
		document.getElementById("kars").setAttribute( "class","komsu" );

		
		}
		if(city==="kars"){
			document.getElementById("igdir").setAttribute( "class","komsu" );
		document.getElementById("agri").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );
		document.getElementById("ardahan").setAttribute( "class","komsu" );

		
		}
		if(city==="aydin"){
			document.getElementById("izmir").setAttribute( "class","komsu" );
		document.getElementById("manisa").setAttribute( "class","komsu" );
		document.getElementById("mugla").setAttribute( "class","komsu" );
		document.getElementById("denizli").setAttribute( "class","komsu" );

		
		}
		if(city==="sirnak"){
			document.getElementById("hakkari").setAttribute( "class","komsu" );
		document.getElementById("van").setAttribute( "class","komsu" );
		document.getElementById("siirt").setAttribute( "class","komsu" );
		document.getElementById("mardin").setAttribute( "class","komsu" );

		
		}
		if(city==="kirklareli"){
			document.getElementById("edirne").setAttribute( "class","komsu" );
		document.getElementById("tekirdag").setAttribute( "class","komsu" );

		
		}
		if(city==="gaziantep"){
			document.getElementById("kilis").setAttribute( "class","komsu" );
		document.getElementById("osmaniye").setAttribute( "class","komsu" );
		document.getElementById("hatay").setAttribute( "class","komsu" );
		document.getElementById("kahraman-maras").setAttribute( "class","komsu" );
		document.getElementById("adiyaman").setAttribute( "class","komsu" );
		document.getElementById("sanliurfa").setAttribute( "class","komsu" );


		
		}
		if(city==="ordu"){
			document.getElementById("giresun").setAttribute( "class","komsu" );
		document.getElementById("sivas").setAttribute( "class","komsu" );
		document.getElementById("tokat").setAttribute( "class","komsu" );
		document.getElementById("samsun").setAttribute( "class","komsu" );

		
		}
		if(city==="ardahan"){
			document.getElementById("kars").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );
		document.getElementById("artvin").setAttribute( "class","komsu" );

		
		}
		if(city==="hatay"){
			document.getElementById("kilis").setAttribute( "class","komsu" );
		document.getElementById("osmaniye").setAttribute( "class","komsu" );
		document.getElementById("gaziantep").setAttribute( "class","komsu" );
		document.getElementById("adana").setAttribute( "class","komsu" );


		
		}
		if(city==="sinop"){
			document.getElementById("samsun").setAttribute( "class","komsu" );
		document.getElementById("corum").setAttribute( "class","komsu" );
		document.getElementById("kastamonu").setAttribute( "class","komsu");

		
		}
		if(city==="tekirdag"){
			document.getElementById("istanbul-avrupa").setAttribute( "class","komsu" );
		document.getElementById("kirklareli").setAttribute( "class","komsu" );
		document.getElementById("canakkale1").setAttribute( "class","komsu" );
		document.getElementById("edirne").setAttribute( "class","komsu" );

		
		}
		if(city==="sakarya"){
			document.getElementById("kocaeli").setAttribute("class","komsu" );
		document.getElementById("bursa").setAttribute( "class","komsu" );
		document.getElementById("bilecik").setAttribute( "class","komsu" );
		document.getElementById("duzce").setAttribute( "class","komsu" );
		document.getElementById("bolu").setAttribute( "class","komsu" );

		
		}
			if(city==="trabzon"){
			document.getElementById("giresun").setAttribute( "class","komsu" );
		document.getElementById("gumushane").setAttribute( "class","komsu" );
		document.getElementById("bayburt").setAttribute( "class","komsu" );
		document.getElementById("rize").setAttribute( "class","komsu" );

		
		}
			if(city==="bartin"){
			document.getElementById("duzce").setAttribute( "class","komsu" );
		document.getElementById("karabuk").setAttribute( "class","komsu" );
		document.getElementById("kastamonu").setAttribute( "class","komsu" );
		document.getElementById("bolu").setAttribute( "class","komsu" );

		
		}
			if(city==="rize"){
			document.getElementById("artvin").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );
		document.getElementById("bayburt").setAttribute( "class","komsu" );
		document.getElementById("trabzon").setAttribute( "class","komsu" );

		
		}
			
		if(city==="igdir"){
			document.getElementById("kars").setAttribute( "class","komsu" );
		document.getElementById("agri").setAttribute( "class","komsu" );
	
		
		}
		if(city==="istanbul-avrupa"){
			document.getElementById("istanbul-anadolu").setAttribute( "class","komsu" );
		document.getElementById("tekirdag").setAttribute( "class","komsu" );

		
		}
		if(city==="kocaeli"){
			document.getElementById("istanbul-anadolu").setAttribute( "class","komsu" );
		document.getElementById("bursa").setAttribute( "class","komsu" );
		document.getElementById("sakarya").setAttribute( "class","komsu" );
		document.getElementById("yalova").setAttribute( "class","komsu" );

		
		}
		if(city==="duzce"){
			document.getElementById("sakarya").setAttribute( "class","komsu" );
		document.getElementById("bolu").setAttribute( "class","komsu" );
		document.getElementById("bartin").setAttribute( "class","komsu" );

		
		}
		if(city==="kilis"){
			document.getElementById("gaziantep").setAttribute( "class","komsu");
		document.getElementById("hatay").setAttribute( "class","komsu");

		
		}
		if(city==="canakkale1"){
			document.getElementById("edirne").setAttribute( "class","komsu" );
		document.getElementById("tekirdag").setAttribute( "class","komsu" );
		document.getElementById("balikesir").setAttribute( "class","komsu" );
		document.getElementById("canakkale2").setAttribute( "class","komsu" );

		
		}
		if(city==="istanbul-anadolu"){
			document.getElementById("istanbul-avrupa").setAttribute( "class","komsu" );
		document.getElementById("kocaeli").setAttribute( "class","komsu" );

		
		}
		if(city==="yalova"){
			document.getElementById("kocaeli").setAttribute( "class","komsu" );
		document.getElementById("bursa").setAttribute( "class","komsu" );

		
		}
		if(city==="diyarbakir"){
			document.getElementById("batman").setAttribute( "class","komsu" );
		document.getElementById("mus").setAttribute( "class","komsu" );
		document.getElementById("bingol").setAttribute( "class","komsu" );
		document.getElementById("elazig").setAttribute( "class","komsu" );
		document.getElementById("malatya").setAttribute( "class","komsu" );
		document.getElementById("sanliurfa").setAttribute( "class","komsu" );
		document.getElementById("adiyaman").setAttribute( "class","komsu" );

		
		}
		if(city==="adiyaman"){
			document.getElementById("sanliurfa").setAttribute( "class","komsu" );
		document.getElementById("diyarbakir").setAttribute( "class","komsu" );
		document.getElementById("elazig").setAttribute( "class","komsu" );
		document.getElementById("malatya").setAttribute( "class","komsu" );
		document.getElementById("kahraman-maras").setAttribute( "class","komsu" );
		document.getElementById("gaziantep").setAttribute( "class","komsu");


		
		}
		if(city==="adiyaman"){
			document.getElementById("sanliurfa").setAttribute( "class","komsu" );
		document.getElementById("diyarbakir").setAttribute( "class","komsu" );
		document.getElementById("elazig").setAttribute( "class","komsu" );
		document.getElementById("malatya").setAttribute( "class","komsu");
		document.getElementById("kahraman-maras").setAttribute( "class","komsu" );
		document.getElementById("gaziantep").setAttribute( "class","komsu" );


		
		}
		if(city==="isparta"){
			document.getElementById("konya").setAttribute( "class","komsu" );
		document.getElementById("afyon").setAttribute( "class","komsu" );
		document.getElementById("burdur").setAttribute( "class","komsu" );
		document.getElementById("antalya").setAttribute( "class","komsu" );

		
		}
		if(city==="karaman"){
			document.getElementById("konya").setAttribute( "class","komsu" );
		document.getElementById("mersin").setAttribute( "class","komsu" );
		document.getElementById("antalya").setAttribute( "class","komsu" );

		
		}
		if(city==="burdur"){
			document.getElementById("isparta").setAttribute( "class","komsu" );
		document.getElementById("afyon").setAttribute( "class","komsu" );
		document.getElementById("denizli").setAttribute( "class","komsu" );
		document.getElementById("antalya").setAttribute( "class","komsu" );
		document.getElementById("mugla").setAttribute( "class","komsu" );

		
		}
			if(city==="siirt"){
			document.getElementById("van").setAttribute( "class","komsu" );
		document.getElementById("bitlis").setAttribute( "class","komsu" );
		document.getElementById("batman").setAttribute( "class","komsu" );
		document.getElementById("mardin").setAttribute( "class","komsu" );
		document.getElementById("sirnak").setAttribute( "class","komsu" );

		
		}
		if(city==="sivas"){
			document.getElementById("tokat").setAttribute( "class","komsu" );
		document.getElementById("ordu").setAttribute( "class","komsu" );
		document.getElementById("giresun").setAttribute( "class","komsu" );
		document.getElementById("erzincan").setAttribute( "class","komsu" );
		document.getElementById("kahraman-maras").setAttribute( "class","komsu" );
		document.getElementById("malatya").setAttribute( "class","komsu" );
		document.getElementById("kayseri").setAttribute( "class","komsu" );
		document.getElementById("yozgat").setAttribute( "class","komsu" );


		
		}
		if(city==="malatya"){
			document.getElementById("elazig").setAttribute( "class","komsu" );
		document.getElementById("tunceli").setAttribute( "class","komsu" );
		document.getElementById("erzincan").setAttribute( "class","komsu" );
		document.getElementById("sivas").setAttribute( "class","komsu" );
		document.getElementById("kahraman-maras").setAttribute( "class","komsu" );
		document.getElementById("adiyaman").setAttribute( "class","komsu" );
		document.getElementById("diyarbakir").setAttribute( "class","komsu" );


		
		}
		if(city==="tunceli"){
			document.getElementById("elazig").setAttribute( "class","komsu" );
		document.getElementById("bingol").setAttribute( "class","komsu" );
		document.getElementById("malatya").setAttribute( "class","komsu" );
		document.getElementById("erzincan").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );

		
		}
		if(city==="nigde"){
			document.getElementById("adana").setAttribute( "class","komsu" );
		document.getElementById("kayseri").setAttribute( "class","komsu" );
		document.getElementById("nevsehir").setAttribute( "class","komsu" );
		document.getElementById("aksaray").setAttribute( "class","komsu" );
		document.getElementById("konya").setAttribute( "class","komsu" );
		document.getElementById("mersin").setAttribute( "class","komsu" );

		
		}
		if(city==="kahraman-maras"){
			document.getElementById("gaziantep").setAttribute( "class","komsu" );
		document.getElementById("adiyaman").setAttribute( "class","komsu" );
		document.getElementById("malatya").setAttribute( "class","komsu" );
		document.getElementById("osmaniye").setAttribute( "class","komsu" );
		document.getElementById("adana").setAttribute( "class","komsu" );
		document.getElementById("kayseri").setAttribute( "class","komsu" );
		document.getElementById("sivas").setAttribute( "class","komsu" );


		
		}
		if(city==="kayseri"){
			document.getElementById("sivas").setAttribute( "class","komsu" );
		document.getElementById("adana").setAttribute( "class","komsu" );
		document.getElementById("nigde").setAttribute( "class","komsu" );
		document.getElementById("nevsehir").setAttribute( "class","komsu" );
		document.getElementById("kahraman-maras").setAttribute( "class","komsu" );
		document.getElementById("yozgat").setAttribute( "class","komsu" );

		
		}
		if(city==="osmaniye"){
			document.getElementById("adana").setAttribute( "class","komsu" );
		document.getElementById("hatay").setAttribute( "class","komsu");
		document.getElementById("gaziantep").setAttribute( "class","komsu" );
		document.getElementById("kahraman-maras").setAttribute( "class","komsu" );


		
		}
		if(city==="corum"){
			document.getElementById("amasya").setAttribute( "class","komsu" );
		document.getElementById("samsun").setAttribute( "class","komsu" );
		document.getElementById("sinop").setAttribute( "class","komsu" );
		document.getElementById("kastamonu").setAttribute( "class","komsu" );
		document.getElementById("cankiri").setAttribute( "class","komsu" );
		document.getElementById("kirikkale").setAttribute( "class","komsu" );
		document.getElementById("ankara").setAttribute( "class","komsu" );
		document.getElementById("tokat").setAttribute( "class","komsu" );
		document.getElementById("yozgat").setAttribute( "class","komsu" );


		
		}
		if(city==="cankiri"){
			document.getElementById("corum").setAttribute( "class","komsu" );
		document.getElementById("karabuk").setAttribute( "class","komsu");
		document.getElementById("kastamonu").setAttribute( "class","komsu" );
		document.getElementById("kirikkale").setAttribute( "class","komsu" );
		document.getElementById("ankara").setAttribute( "class","komsu" );


		
		}
		if(city==="karabuk"){
			document.getElementById("cankiri").setAttribute( "class","komsu" );
		document.getElementById("bartin").setAttribute( "class","komsu" );
		document.getElementById("kastamonu").setAttribute( "class","komsu" );
		document.getElementById("bolu").setAttribute( "class","komsu" );
		document.getElementById("ankara").setAttribute( "class","komsu" );


		
		}
		if(city==="denizli"){
			document.getElementById("burdur").setAttribute( "class","komsu" );
		document.getElementById("afyon").setAttribute( "class","komsu" );
		document.getElementById("usak").setAttribute( "class","komsu" );
		document.getElementById("manisa").setAttribute( "class","komsu" );
		document.getElementById("aydin").setAttribute( "class","komsu");
		document.getElementById("mugla").setAttribute( "class","komsu" );


		
		}
		if(city==="manisa"){
			document.getElementById("izmir").setAttribute( "class","komsu" );
		document.getElementById("balikesir").setAttribute( "class","komsu" );
		document.getElementById("kutahya").setAttribute( "class","komsu" );
		document.getElementById("usak").setAttribute( "class","komsu" );
		document.getElementById("aydin").setAttribute( "class","komsu" );
		document.getElementById("denizli").setAttribute( "class","komsu" );


		
		}
		if(city==="kutahya"){
			document.getElementById("manisa").setAttribute( "class","komsu" );
		document.getElementById("balikesir").setAttribute( "class","komsu" );
		document.getElementById("bursa").setAttribute( "class","komsu" );
		document.getElementById("bilecik").setAttribute( "class","komsu" );
		document.getElementById("eskisehir").setAttribute( "class","komsu" );
		document.getElementById("afyon").setAttribute( "class","komsu" );
		document.getElementById("usak").setAttribute( "class","komsu" );


		
		}
		if(city==="mus"){
			document.getElementById("bitlis").setAttribute( "class","komsu" );
		document.getElementById("batman").setAttribute( "class","komsu" );
		document.getElementById("diyarbakir").setAttribute( "class","komsu" );
		document.getElementById("bingol").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );
		document.getElementById("agri").setAttribute( "class","komsu" );

		
		}
		if(city==="bilecik"){
			document.getElementById("bolu").setAttribute( "class","komsu" );
		document.getElementById("eskisehir").setAttribute( "class","komsu" );
		document.getElementById("kutahya").setAttribute( "class","komsu" );
		document.getElementById("bursa").setAttribute( "class","komsu" );
		document.getElementById("sakarya").setAttribute( "class","komsu" );

		
		}
		if(city==="batman"){
			document.getElementById("bitlis").setAttribute( "class","komsu" );
		document.getElementById("siirt").setAttribute( "class","komsu" );
		document.getElementById("mardin").setAttribute( "class","komsu" );
		document.getElementById("diyarbakir").setAttribute( "class","komsu" );
		document.getElementById("mus").setAttribute( "class","komsu" );

		
		}
		if(city==="tokat"){
			document.getElementById("ordu").setAttribute( "class","komsu" );
		document.getElementById("sivas").setAttribute( "class","komsu" );
		document.getElementById("yozgat").setAttribute( "class","komsu" );
		document.getElementById("amasya").setAttribute( "class","komsu" );
		document.getElementById("samsun").setAttribute( "class","komsu" );
		document.getElementById("corum").setAttribute( "class","komsu" );

		
		}
		if(city==="amasya"){
		document.getElementById("yozgat").setAttribute( "class","komsu" );
		document.getElementById("tokat").setAttribute( "class","komsu" );
		document.getElementById("samsun").setAttribute( "class","komsu" );
		document.getElementById("corum").setAttribute( "class","komsu" );

		
		}
		if(city==="bolu"){
		document.getElementById("karabuk").setAttribute( "class","komsu" );
		document.getElementById("bartin").setAttribute( "class","komsu" );
		document.getElementById("duzce").setAttribute( "class","komsu" );
		document.getElementById("sakarya").setAttribute( "class","komsu" );
		document.getElementById("bilecik").setAttribute( "class","komsu" );
		document.getElementById("eskisehir").setAttribute( "class","komsu" );
		document.getElementById("ankara").setAttribute( "class","komsu" );

		
		}
		if(city==="elazig"){
			document.getElementById("bingol").setAttribute( "class","komsu" );
		document.getElementById("tunceli").setAttribute( "class","komsu" );
		document.getElementById("malatya").setAttribute( "class","komsu" );
		document.getElementById("diyarbakir").setAttribute( "class","komsu" );

		
		}
		if(city==="eskisehir"){
			document.getElementById("ankara").setAttribute( "class","komsu" );
		document.getElementById("bolu").setAttribute( "class","komsu" );
		document.getElementById("bilecik").setAttribute( "class","komsu" );
		document.getElementById("kutahya").setAttribute( "class","komsu" );
		document.getElementById("afyon").setAttribute( "class","komsu" );
		document.getElementById("konya").setAttribute( "class","komsu" );

		
		}
		if(city==="afyon"){
			document.getElementById("isparta").setAttribute( "class","komsu" );
		document.getElementById("konya").setAttribute( "class","komsu" );
		document.getElementById("eskisehir").setAttribute( "class","komsu" );
		document.getElementById("kutahya").setAttribute( "class","komsu");
		document.getElementById("usak").setAttribute( "class","komsu" );
		document.getElementById("denizli").setAttribute( "class","komsu" );
		document.getElementById("burdur").setAttribute( "class","komsu" );

		
		}
		if(city==="yozgat"){
			document.getElementById("sivas").setAttribute( "class","komsu" );
		document.getElementById("tokat").setAttribute( "class","komsu" );
		document.getElementById("corum").setAttribute( "class","komsu" );
		document.getElementById("kirikkale").setAttribute( "class","komsu" );
		document.getElementById("kirsehir").setAttribute( "class","komsu" );
		document.getElementById("nevsehir").setAttribute( "class","komsu" );
		document.getElementById("kayseri").setAttribute( "class","komsu" );

		
		}
		if(city==="nevsehir"){
			document.getElementById("yozgat").setAttribute( "class","komsu" );
		document.getElementById("aksaray").setAttribute( "class","komsu" );
		document.getElementById("kirsehir").setAttribute( "class","komsu" );
		document.getElementById("nigde").setAttribute( "class","komsu" );
		document.getElementById("kayseri").setAttribute( "class","komsu" );

		
		}
			if(city==="usak"){
			document.getElementById("afyon").setAttribute( "class","komsu" );
		document.getElementById("kutahya").setAttribute( "class","komsu" );
		document.getElementById("manisa").setAttribute( "class","komsu" );
		document.getElementById("denizli").setAttribute( "class","komsu" );

		
		}
			if(city==="hakkari"){
			document.getElementById("van").setAttribute( "class","komsu" );
		document.getElementById("sirnak").setAttribute( "class","komsu" );

		
		}
			if(city==="bingol"){
			document.getElementById("mus").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );
		document.getElementById("tunceli").setAttribute( "class","komsu" );
		document.getElementById("elazig").setAttribute( "class","komsu" );
		document.getElementById("diyarbakir").setAttribute( "class","komsu" );

		
		}
		
		if(city==="kirikkale"){
			document.getElementById("ankara").setAttribute( "class","komsu" );
		document.getElementById("kirsehir").setAttribute( "class","komsu" );
		document.getElementById("yozgat").setAttribute( "class","komsu" );
		document.getElementById("corum").setAttribute( "class","komsu" );
		document.getElementById("cankiri").setAttribute( "class","komsu" );

		
		}
		if(city==="erzurum"){
			document.getElementById("agri").setAttribute( "class","komsu" );
		document.getElementById("kars").setAttribute( "class","komsu" );
		document.getElementById("ardahan").setAttribute( "class","komsu" );
		document.getElementById("artvin").setAttribute( "class","komsu" );
		document.getElementById("rize").setAttribute( "class","komsu" );
		document.getElementById("bayburt").setAttribute( "class","komsu" );
		document.getElementById("erzincan").setAttribute( "class","komsu" );
		document.getElementById("tunceli").setAttribute( "class","komsu" );
		document.getElementById("bingol").setAttribute( "class","komsu" );
		document.getElementById("mus").setAttribute( "class","komsu" );


		
		}
		if(city==="van-golu"){
			document.getElementById("van").setAttribute( "class","komsu" );
		document.getElementById("agri").setAttribute( "class","komsu" );
		document.getElementById("bitlis").setAttribute( "class","komsu" );

		
		}
        if(city==="bitlis"){
            document.getElementById("van-golu").setAttribute( "class","komsu" );
        document.getElementById("van").setAttribute( "class","komsu" );
        document.getElementById("mus").setAttribute( "class","komsu" );
        document.getElementById("siirt").setAttribute( "class","komsu" );
        document.getElementById("batman").setAttribute( "class","komsu" );

        
        }
		if(city==="tuz-golu"){
			document.getElementById("ankara").setAttribute( "class","komsu" );
		document.getElementById("aksaray").setAttribute( "class","komsu" );
		document.getElementById("konya").setAttribute( "class","komsu" );

		
		}
		if(city==="kirsehir"){
			document.getElementById("kirikkale").setAttribute( "class","komsu" );
		document.getElementById("ankara").setAttribute( "class","komsu" );
		document.getElementById("yozgat").setAttribute( "class","komsu" );
		document.getElementById("aksaray").setAttribute( "class","komsu" );
		document.getElementById("nevsehir").setAttribute( "class","komsu" );

		
		}
			if(city==="ankara"){
			document.getElementById("eskisehir").setAttribute( "class","komsu" );
		document.getElementById("bolu").setAttribute( "class","komsu" );
		document.getElementById("karabuk").setAttribute( "class","komsu" );
		document.getElementById("cankiri").setAttribute( "class","komsu" );
		document.getElementById("kirikkale").setAttribute( "class","komsu" );
		document.getElementById("kirsehir").setAttribute( "class","komsu" );
		document.getElementById("aksaray").setAttribute( "class","komsu" );
		document.getElementById("konya").setAttribute( "class","komsu" );
		document.getElementById("tuz-golu").setAttribute( "class","komsu");


		
		}
			if(city==="konya"){
		document.getElementById("tuz-golu").setAttribute( "class","komsu" );
		document.getElementById("ankara").setAttribute( "class","komsu" );
		document.getElementById("aksaray").setAttribute( "class","komsu" );
		document.getElementById("karaman").setAttribute( "class","komsu" );
		document.getElementById("antalya").setAttribute( "class","komsu" );
		document.getElementById("isparta").setAttribute( "class","komsu" );
		document.getElementById("afyon").setAttribute( "class","komsu" );
		document.getElementById("eskisehir").setAttribute( "class","komsu" );

		
		}
		if(city==="aksaray"){
		document.getElementById("tuz-golu").setAttribute( "class","komsu" );
		document.getElementById("ankara").setAttribute( "class","komsu" );
		document.getElementById("konya").setAttribute( "class","komsu" );
		document.getElementById("kirsehir").setAttribute( "class","komsu" );
		document.getElementById("nevsehir").setAttribute( "class","komsu" );
		document.getElementById("nigde").setAttribute( "class","komsu" );

		
		}
		if(city==="giresun"){
			document.getElementById("trabzon").setAttribute( "class","komsu" );
		document.getElementById("gumushane").setAttribute( "class","komsu" );
		document.getElementById("erzincan").setAttribute( "class","komsu" );
		document.getElementById("sivas").setAttribute( "class","komsu" );
		document.getElementById("ordu").setAttribute( "class","komsu" );

		
		}
		if(city==="erzincan"){
			document.getElementById("bayburt").setAttribute( "class","komsu");
		document.getElementById("gumushane").setAttribute( "class","komsu" );
		document.getElementById("giresun").setAttribute( "class","komsu" );
		document.getElementById("sivas").setAttribute( "class","komsu" );
		document.getElementById("malatya").setAttribute( "class","komsu" );
		document.getElementById("tunceli").setAttribute( "class","komsu" );
        document.getElementById("erzurum").setAttribute( "class","komsu" );		
		}

		if(city==="bayburt"){
			document.getElementById("trabzon").setAttribute( "class","komsu" );
		document.getElementById("gumushane").setAttribute( "class","komsu" );
		document.getElementById("rize").setAttribute( "class","komsu" );
		document.getElementById("erzurum").setAttribute( "class","komsu" );
		document.getElementById("erzincan").setAttribute( "class","komsu" );
		}

		if(city==="gumushane"){
			document.getElementById("bayburt").setAttribute( "class","komsu" );
		document.getElementById("trabzon").setAttribute( "class","komsu" );
		document.getElementById("giresun").setAttribute( "class","komsu" );
		document.getElementById("erzincan").setAttribute( "class","komsu" );
		
		
		}


		for(let i = 0; i<document.querySelectorAll('g:not(.komsu)').length; i++){
				document.querySelectorAll('g:not(.komsu)')[i].setAttribute("data-select","unselectable");
			}
		for(let i=0; i<document.querySelectorAll('.komsu').length; i++){
				document.querySelectorAll('.komsu')[i].setAttribute("data-select","unselected");
		}

	} else if(color!="uncolored"){
		alert ("no no no ");
	} 
}

function mySubmit(event){
    
    let holymolly= document.getElementById("color_value").value;
    let mollyholy= document.getElementById("name_of_beylik").value;
    const selector = document.getElementById("choose");
    g = document.createElement('div');
    let h = document.createElement('span');
    let t = document.createTextNode(mollyholy);
    g.setAttribute("id", mollyholy);
    g.style.width = "100%";
    g.style.height = "50px";
    g.style.backgroundColor = "#"+ holymolly;
    
    h.appendChild(t); 
    selector.appendChild(g);
    selector.appendChild(h);
    return false;
 }
