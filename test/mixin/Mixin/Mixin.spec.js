import Mixin from '../../../src/mixin/Mixin'
import Event from '../../../src/event/Event'

describe('Mixin', () => {
  it('implements "Event"', () => {
    expect(Event.isImplementedBy(Mixin)).toBeTruthy()
  })
})
