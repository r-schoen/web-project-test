import {  assert } from 'chai'
import { shallowMount, createLocalVue } from "@vue/test-utils"
import DayInHistoryViewer from "@/components/DayInHistoryViewer.vue"
import Vuex from 'vuex' 

const localVue = createLocalVue()
localVue.use(Vuex)

describe('DayInHistoryViewer', () => {
	let actions
	let store 

	before(() => {
		actions = {
			updateDateEventData: function() {}
		},
		store = new Vuex.Store({
			actions
		})
	})
	it('Contains a #datepicker object', () => {
		const wrapper = shallowMount(DayInHistoryViewer, {store,localVue})
		const div = wrapper.find('#datepicker')
		assert(div)
	})
})