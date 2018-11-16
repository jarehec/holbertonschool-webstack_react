import { connect } from 'react-redux'
import Counter from '../components/Counter.jsx'

const mapStateToProps = (state) => ({
  value: state
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({type:'INCREMENT'})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
