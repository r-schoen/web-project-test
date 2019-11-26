import {  assert } from 'chai'
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Todo from "@/components/DayInHistoryViewer.vue"
import Vuex from 'vuex' 

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Todo', () => {
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
	it('Contains a #todoTable object', () => {
		const wrapper = shallowMount(Todo, {store,localVue})
		const div = wrapper.find('#todoTable')
		assert(div)
	})
})