Ext.Loader.setConfig({
	enabled: true,
	disableCaching: false
});

Ext.application({
	name: 'SecurityEx',

	controllers: [
		'SecurityEx.controller.Main'
	],

	launch: function() {
		Ext.create('Ext.Viewport', {
			items: [
				{
					region: 'center',
					xtype: 'main-show'
				}
			]
		});
	}
});