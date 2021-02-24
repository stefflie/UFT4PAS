Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf2.xml_;_
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").WaitProperty "innertext", 9.3, 10000
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").Exist (20)
CurrentScore = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf4.xml_;_
If currentScore >=9.0 Then
	
Reporter.ReportEvent micPass, "checkScore", "Score exceeded the desired value."
Reporter.ReportEvent micFail, "checkStatus", "Score is too low."
End If
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click
