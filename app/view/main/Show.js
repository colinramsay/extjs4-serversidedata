Ext.define('SecurityEx.view.main.Show', {
	extend: 'Ext.Container',
	xtype: 'main-show',

	initComponent: function() {
		this.callParent(arguments);
		this.update(Ext.String.format('Welcome {0}!', SecurityEx.settings.userName));
	}
});