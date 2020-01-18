import Interface from '../interface'

import on from './on'
import off from './off'
import trigger from './trigger'

const Event = new Interface({ on, off, trigger })

export default Event
