var arrayOfAllCheckboxes = document.getElementsByClassName('wordsToPracticeCheckbox');
var arrayOfAllSubmitButtons = document.getElementsByClassName('submitButton');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var checkboxClickFunction = function handleCheckBoxClick(e)
{
	e.stopPropagation();
		
	if (this.checked === false)
	{
		console.log("inside unchecked checkbox check");
		for (let i = 0; i < arrayOfAllSubmitButtons.length; i++)
		{
			if (this.value == arrayOfAllSubmitButtons[i].value)
			{
				arrayOfAllSubmitButtons[i].style.visibility = 'hidden';
			}
		}

		for (let i = 0; i < arrayOfCurrentPossibleAudioWords.length; i++)
		{
			if (this.value == arrayOfCurrentPossibleAudioWords[i].name)
			{
				arrayOfCurrentPossibleAudioWords.splice(i,1);
				return;
			}//end of removing possible audio letters
		}//end of populating current possible audio letters array
	}
	else if (this.checked === true)
	{
		console.log('this: ' + this);
		console.log('this.value: ' + this.value);

		for (let i=0; i < arrayOfAllAudioWords.length;i++)
		{
		    console.log(arrayOfAllAudioWords[i].name);
		}

		for (let i = 0; i < arrayOfAllSubmitButtons.length; i++)
		{
			console.log('arrayOfAllSubmitButtons[i].value: ' + arrayOfAllSubmitButtons[i].value);
			if (this.value == arrayOfAllSubmitButtons[i].value)
			{
				console.log('match found');
				arrayOfAllSubmitButtons[i].style.visibility = 'visible';
				console.log('arrayOfAllAudioWords[i]: ' + arrayOfAllAudioWords[i]);
				arrayOfCurrentPossibleAudioWords.push(arrayOfAllAudioWords[i]);
			}//end of turning on submit button visibility and adding audio letter to possible prompts array
		}
	}
}//end of handleCheckBoxClick

var buttonWasJustPressed = false;
var handleSubmitButtonFunction = function handleSubmitButton(e) 
{
	e.stopPropagation();
	console.log(e.currentTarget.type);
	console.log('this from submit button: ' + this);
	if (this.value == currentCorrectAudioWord.name)
	{
		georgianYes.play();
		alert("Yes");
	}
	else
	{
		georgianNo.play();
		alert("No");
	}
}

for (let i = 0; i < arrayOfAllSubmitButtons.length; i++)
{
	arrayOfAllSubmitButtons[i].onclick = handleSubmitButtonFunction;
}

for (let i = 0; i < arrayOfAllCheckboxes.length; i++)
{
	arrayOfAllCheckboxes[i].onclick = checkboxClickFunction;
}//end of for loop to assign onclick functions to checkboxes

var currentCorrectAudioWord = undefined;

function handlePlayButtonClick()
{
	randomAudioWordIndex = getRndInteger(0, arrayOfCurrentPossibleAudioWords.length - 1);
	
	currentCorrectAudioWord = arrayOfCurrentPossibleAudioWords[randomAudioWordIndex];
	console.log('currentCorrectAudioWord: ' + currentCorrectAudioWord);
	console.log('currentCorrectAudioWord.name: ' + currentCorrectAudioWord.name);

	currentCorrectAudioWord.play();
}