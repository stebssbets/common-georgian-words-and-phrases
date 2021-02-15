var arrayOfAllAudioWords = [];
var arrayOfCurrentPossibleAudioWords = [];

//1
var გამარჯობა = document.createElement('audio');
გამარჯობა.src = 'Audio/გამარჯობა.wav';
გამარჯობა.name = 'გამარჯობა';
//2
var დილამშვიდობისა  = document.createElement('audio');
დილამშვიდობისა.src ='Audio/დილა მშვიდობისა.wav';
დილამშვიდობისა.name = 'დილა მშვიდობისა';
//3
var საღამომშვიდობისა = document.createElement('audio');
საღამომშვიდობისა.src = 'Audio/საღამო მშვიდობისა.wav';
საღამომშვიდობისა.name = 'საღამო მშვიდობისა';
//4
var ღამემშვიდობისა = document.createElement('audio'); 
ღამემშვიდობისა.src = 'Audio/ღამე მშვიდობისა.wav';
ღამემშვიდობისა.name = 'ღამე მშვიდობისა';
//5
var ნახვამდის = document.createElement('audio'); 
ნახვამდის.src = 'Audio/ნახვამდის.wav';
ნახვამდის.name = 'ნახვამდის';
//6
var დიახ = document.createElement('audio'); 
დიახ.src = 'Audio/დიახ.wav';
დიახ.name = 'დიახ';
//7
var კი = document.createElement('audio'); 
კი.src = 'Audio/კი.wav';
კი.name = 'კი';
//8
var ჰო = document.createElement('audio'); 
ჰო.src = 'Audio/ჰო.wav';
ჰო.name = 'ჰო';
//9
var არა = document.createElement('audio'); 
არა.src = 'Audio/არა.wav';
არა.name = 'არა';
//10
var კარგი = document.createElement('audio'); 
კარგი.src = 'Audio/კარგი.wav';
კარგი.name = 'კარგი';
//11
var არმომწონს = document.createElement('audio'); 
არმომწონს.src = 'Audio/არ მომწონს.wav';
არმომწონს.name = 'არმომწონს';

//12
var ბოთიში = document.createElement('audio'); 
ბოთიში.src = 'Audio/ბოთიში.wav';
ბოთიში.name = 'ბოთიში';
//13
var გთხოვ = document.createElement('audio'); 
გთხოვ.src = 'Audio/გთხოვ.wav';
გთხოვ.name = 'გთხოვ';
//14
var დროებით = document.createElement('audio'); 
დროებით.src = 'Audio/დროებით.wav';
დროებით.name = 'დროებით';
//15
var თუკარგადვარ = document.createElement('audio'); 
თუკარგადვარ.src = 'Audio/თუ კარგადვარ.wav';
თუკარგადვარ.name = 'თუკარგადვარ';
//16
var კარგად = document.createElement('audio'); 
კარგად.src = 'Audio/კარგად.wav';
კარგად.name = 'კარგად';
//17
var მათლობა = document.createElement('audio'); 
მათლობა.src = 'Audio/მათლობა.wav';
მათლობა.name = 'მათლობა';
//18
var მეკარგადვარ = document.createElement('audio'); 
მეკარგადვარ.src = 'Audio/მე კარგად ვარ.wav';
მეკარგადვარ.name = 'მეკარგადვარ';
//19
var მომწონს = document.createElement('audio'); 
მომწონს.src = 'Audio/მომწონს.wav';
მომწონს.name = 'მომწონს';
//20
var ნახვამდის = document.createElement('audio'); 
ნახვამდის.src = 'Audio/ნახვამდის.wav';
ნახვამდის.name = 'ნახვამდის';
//21
var უკაცრავად = document.createElement('audio'); 
უკაცრავად.src = 'Audio/უკაცრავად.wav';
უკაცრავად.name = 'უკაცრავად';


arrayOfAllAudioWords.push(
	//1
	გამარჯობა,
	//2
	დილამშვიდობისა,
	//3
	საღამომშვიდობისა,
	//4
	ღამემშვიდობისა,
	//5
	ნახვამდის,
	//6
	დიახ,
	//7
	კი,
	//8
	ჰო,
	//9
	არა,
	//10
	კარგი,
	//11
	არმომწონს,
	//12
	ბოთიში,
	//13
	გთხოვ,
	//14
	დროებით,
	//15
	თუკარგადვარ,
	//16
	კარგად,
	//17
	მათლობა,
	//18
	მეკარგადვარ,
	//19
	მომწონს,
	//20
	ნახვამდის,
	//21
	უკაცრავად);

var georgianYes = document.createElement('audio');
georgianYes.src = 'Audio/Georgian yes.wav';
var georgianNo = document.createElement('audio');
georgianNo.src = 'Audio/Georgian no.wav';