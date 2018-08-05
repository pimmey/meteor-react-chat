import Channels from '../../api/channels/collection'
import { addChannel } from '../../api/channels/methods'

const CHANNELS = [
  'general',
  'announcement',
  'fun'
]

const seed = () => {
  if (Channels.find().count() === 0) {
    CHANNELS.forEach(name => addChannel.call({ name }))
  }
}

export default seed
