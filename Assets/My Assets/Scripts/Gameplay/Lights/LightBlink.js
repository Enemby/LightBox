//Basic script that blinks a light, to have a 'pretend' security camera light.
﻿var waittime : float = 1; //How long do we wait between blinks?
var Distance : float = 25; //If player is more than 'Distance' away, we turn off the light.
function LightBlink(){ //Switches a light on and off every 'waittime' seconds.
	if(this.transform.Find("Light").GetComponent(Light).enabled == true){
		yield WaitForSeconds(waittime/2);
		this.transform.Find("Light").GetComponent(Light).enabled = false;
	}
	if(this.transform.Find("Light").GetComponent(Light).enabled == false){
		yield WaitForSeconds(waittime/2);
		this.transform.Find("Light").GetComponent(Light).enabled = true;
	}
}
function Update () { //Called every frame
	LightBlink();
	if(Application.loadedLevelName != "TITLECREEN"){ //Don't run in the Titlescreen. where there is no player.
		var Player = GameObject.FindGameObjectWithTag("Player");
		}
	if(this.GetComponent.<Light>()){ //Checks distance from player, and if it's far, turns off light
		if(Vector3.Distance(Player.transform.position,this.transform.position) >= Distance ){
		this.GetComponent.<Light>().enabled = false;
		}
		else{
			if(Vector3.Distance(Player.transform.position,this.transform.position) <= Distance){
				this.GetComponent.<Light>().enabled = true;
				
			}
		}
	}
}
