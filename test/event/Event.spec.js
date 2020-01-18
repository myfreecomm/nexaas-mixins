import Event from '../../src/event/Event'
import on from '../../src/event/on'
import off from '../../src/event/off'
import trigger from '../../src/event/trigger'

describe('Event', () => {
  it('has "on", "off" and "trigger" interface props', () => {
    expect(Event.props).toEqual({ on, off, trigger })
  })
})
