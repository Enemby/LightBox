var Tutorial : boolean = false;
var alarm : AudioClip;
var exit : AudioClip;
var active : boolean = false;
var Neutral : Material;
var Alarm : Material;
var NeutCol : Color;
var AlarmCol : Color;
function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "Player"){
		if(other.gameObject.GetComponent(Light).enabled == true){
			active = true;
			if(active == true){
				this.GetComponent(AudioSource).PlayOneShot(alarm);
				if(Tutorial == false){
					other.gameObject.BroadcastMessage("Damage",1);
				}
				this.transform.GetComponent.<Renderer>().material = Alarm;
				this.transform.parent.transform.GetComponent(Light).color = AlarmCol;
			}
		}
	}
}
function OnTriggerExit(other:Collider){
	if(other.gameObject.tag == "Player"){
		if(other.gameObject.GetComponent(Light).enabled == true){
			this.GetComponent(AudioSource).PlayOneShot(exit);
			this.transform.GetComponent.<Renderer>().material = Neutral;
			this.transform.parent.transform.GetComponent(Light).color = NeutCol;
			active = false;
		}
	}
}
function OnTriggerStay(other:Collider){
	if(active == true){
		if(other.gameObject.tag == "Player"){
			if(other.gameObject.GetComponent(Light).enabled == false){
				this.GetComponent(AudioSource).PlayOneShot(exit);
				this.transform.GetComponent.<Renderer>().material = Neutral;
				this.transform.parent.transform.GetComponent(Light).color = NeutCol;
				active = false;
				}
			}
		}
	else{
		if(other.gameObject.tag == "Player"){
			if(other.gameObject.GetComponent(Light).enabled == true){
				this.GetComponent(AudioSource).PlayOneShot(alarm);
				if(Tutorial == false){
					other.gameObject.BroadcastMessage("Damage",1);
				}
				this.transform.GetComponent.<Renderer>().material = Alarm;
				this.transform.parent.transform.GetComponent(Light).color = AlarmCol;
				active = true;
			}
		
		}
	}
}