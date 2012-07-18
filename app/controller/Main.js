Ext.define('SecurityEx.controller.Main', {
	extend: 'Ext.app.Controller',

	views: ['main.Show'],

	init: function() {
		alert(Ext.String.format(' The controller says you {0} an administrator.', SecurityEx.settings.isAdministrator ? 'are' : 'aren\'t'));
	}
});