import { PureComponent } from 'react'
import { connectResource } from 'common/utils/resource'
import Chart from './Chart'

class ChartContainer extends PureComponent {
  render () {
    return (<Chart {...this.props} />)
  }
}

export default connectResource({
  namespace: 'chart',
  endpoint: 'revenue',
  prefetch: true
})(ChartContainer)
