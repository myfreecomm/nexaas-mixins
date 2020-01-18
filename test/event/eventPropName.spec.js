import eventPropName from '../../src/event/eventPropName'

describe('eventPropName', () => {
  it('is "__events__"', () => {
    expect(eventPropName).toBe('__events__')
  })
})
