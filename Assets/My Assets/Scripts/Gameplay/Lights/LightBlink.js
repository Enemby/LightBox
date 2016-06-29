//Basic script that blinks a light, to have a 'pretend' security camera light.
﻿var waittime : float = 1; //How long do we wait between blinks?
var Distance : float = 25; //If player is more than 'Distance' away, we turn off the light.
function LightBlink(){
	if(this.transform.Find("Light").GetComponent(Light).enabled == true){
		yield WaitForSeconds(waittime/2);
		this.transform.Find("Light").GetComponent(Light).enabled = false;
	}
	if(this.transform.Find("Light").GetComponent(Light).enabled == false){
		yield WaitForSeconds(waittime/2);
		this.transform.Find("Light").GetComponent(Light).enabled = true;
	}
}
function Update () {
	LightBlink();
	if(Application.loadedLevelName != "TITLECREEN"){
		var Player = GameObject.FindGameObjectWithTag("Player");
		}
	if(this.GetComponent.<Light>()){
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
