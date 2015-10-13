var Background : Sprite;
var Border : Sprite;
var Portrait : Sprite;
var Sentences : String[];
var NextConversation : GameObject;
var CanvasGameObject : GameObject;
var sound : AudioClip;
var letterPause = 0.2;
var SentencePause : float = 1;
private var TextCounter : int = 0;
function TypeText (text : String) {
	for (var letter in text.ToCharArray()) {
		CanvasGameObject.transform.Find("Text").GetComponent("Text").text += letter;
		if (sound){
			GameObject.Find("Main Camera").GetComponent(AudioSource).PlayOneShot (sound);
			}
		yield WaitForSeconds (letterPause);
	}
}
function NewSentence(){
	TextCounter+=1;
	if(TextCounter < Sentences.Length-1){
		yield WaitForSeconds (SentencePause);
		CanvasGameObject.transform.Find("Text").GetComponent("Text").text = "";
		TypeText(Sentences[TextCounter]);
	}
	else{
		if(NextConversation){
			NextConversation.GetComponent("Conversation").enabled = true;
		} 
		this.enabled = false;
	}
}
function SetImages(){

}
function Start(){
CanvasGameObject.transform.Find("Text").GetComponent("Text").text = "";
CanvasGameObject.transform.Find("Background").GetComponent("Image").sprite = Background;
CanvasGameObject.transform.Find("Border").GetComponent("Image").sprite = Border;
CanvasGameObject.transform.Find("Portrait").GetComponent("Image").sprite = Portrait;
}
function Update () {
	if(CanvasGameObject.transform.Find("Text").GetComponent("Text")){
		if(Sentences[TextCounter] == CanvasGameObject.transform.Find("Text").GetComponent("Text").text){
			NewSentence();
		}
	}
}