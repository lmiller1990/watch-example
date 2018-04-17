import { shallow } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallow(HelloWorld)

    wrapper.vm.$options.watch.isDone.call(wrapper.vm)

    expect(wrapper.text()).toEqual("1")
  })

  it('renders props.msg when passed', () => {
    const localThis = {
      count: 0
    }
    HelloWorld.watch.isDone.call(localThis)

    expect(localThis.count).toBe(1)
  })
})
