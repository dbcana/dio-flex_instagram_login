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
		continueas: 'Continuar como cana.db',
		removeacc: 'Eliminar cuenta',
		isnot: '¿No es cana.db?',
		changeacc: 'Cambiar cuenta',
		joinus: 'Únete a nosotros',
		getapp: 'Obtener la aplicación'
	},
	'pt': {
		continueas: 'Continue como cana.db',
		removeacc: 'Remover conta',
		isnot: 'Não é cana.db?',
		changeacc: 'Mudar de conta',
		joinus: 'Junte-se a nós',
		getapp: 'Baixe o aplicativo'
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
