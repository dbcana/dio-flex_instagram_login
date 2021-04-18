var langOptions = {
	'en': {
		continueas: 'Continue as cana.db',
		removeacc: 'Remove account',
		isnot: 'Is not cana.db?',
		changeacc: 'Change account',
		joinus: 'Join us',
		getapp: 'Get the app'
	},
	'es': {
		continueas: 'Continue como cana.db',
		removeacc: 'Remueva la cuenta',
		isnot: 'No eres cana.db?',
		changeacc: 'Cambie la cuenta',
		joinus: 'Juntese a nosotros',
		getapp: 'Tenga el app'
	},
	'pt': {
		continueas: 'Continue como cana.db',
		removeacc: 'Remover conta',
		isnot: 'Não é cana.db?',
		changeacc: 'Trocar de conta',
		joinus: 'Junte-se a nós',
		getapp: 'Obtenha o aplicativo'
	}	
}
var vue_obj = new Vue({
	el: '#vue_obj',
	data: {
		language: 'en',
		fields: langOptions['en']
	},
	methods: {
		setLang: function(lang){
			this.language = lang;
		},
		changeLanguage: function(){
			this.fields = langOptions[this.language];
		}
	},
	watch: {
		'language': 'changeLanguage'
	}
});
