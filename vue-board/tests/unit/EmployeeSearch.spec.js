import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import {FULL_URL} from '@/utils/constants.js'
import EmployeeSearch from '@/components/EmployeeSearch.vue'
import {mount, createLocalVue} from '@vue/test-utils'
import Chai from 'chai'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'
import sinon from 'sinon'

Chai.use(require('sinon-chai'))

//import Vue from 'vue'
const mock = new MockAdapter(Axios)
const localVue = createLocalVue()
localVue.use(Vuex)


describe("Employee returns correct information", () => {
	const url = 'http://dummy.restapiexample.com/api/v1/employee/1'

	mock.onGet(url).reply(200,{ "data": { "id": "1", "employee_name": "Romina", "employee_salary": "2000", "employee_age": "18", "profile_image": "" }, "status": 200, "statusText": "OK", "headers": { "pragma": "no-cache", "cache-control": "no-store, no-cache, must-revalidate", "content-type": "text/html; charset=UTF-8", "expires": "Thu, 19 Nov 1981 08:52:00 GMT" }, "config": { "url": "http://dummy.restapiexample.com/api/v1/employee/1", "method": "get", "headers": { "Accept": "application/json, text/plain, */*" }, "transformRequest": [ null ], "transformResponse": [ null ], "timeout": 0, "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN", "maxContentLength": -1 }, "request": {} })
	

	it('Updating the text should call the update function', () => {
		const wrapper = mount(EmployeeSearch, {localVue})
		const getEmployeeStub = sinon.stub()
		wrapper.setMethods({getEmployee: getEmployeeStub })
		// Update input box with key '1'
		wrapper.find('.inputBox').trigger('update')
		Chai.expect(getEmployeeStub).to.have.been.calledOnce
		// CHeck that the currentEmployee is now an object, equal to the above, and not a string. 

	})
	it('Update method should update the data correctly', async () => {
		const wrapper = mount(EmployeeSearch, {localVue})
		wrapper.find('.inputBox').trigger('update',1)
		await flushPromises()
		wrapper.vm.currentEmployee = 'None'
		wrapper.vm.getEmployee(1)
		wrapper.vm.searchText = '1'
		console.log("HIHIHI")
		console.log(wrapper.vm.currentEmployee)
		Chai.expect(wrapper.vm.currentEmployee).to.not.equal('None')
	})
})