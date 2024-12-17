const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.SpeechSynthesis,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.AppendText,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.SpeechSynthesis.Acts.SpeakText,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{Player: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{Tomato: 0},
	{Keyboard: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{TiledBackground4: 0},
	{SpeechSynthesis: 0},
	{score: 0},
	{scores: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tomato: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	SpeechSynthesis: class extends self.IInstance {},
	score: class extends self.ITextInstance {}
}