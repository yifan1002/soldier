export default {
	state: {
		menuCurrent: 'home',
		subMenuCurrent: '',
		token: '',
		network: true,
		success: false
	},
	mutations: {
		changeMenu: (state, currentName) => state.menuCurrent = currentName,
		changeSubMenu: (state, currentName) => state.subMenuCurrent = currentName,
		changeToken: (state, val) => state.token = val,
		changeNetwork: (state, val) => state.network = val,
		loginSuccess: (state, val) => state.success = val,
	},
}