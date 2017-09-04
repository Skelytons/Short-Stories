import { connect } from 'react-redux'
import ShortStoriesButton from './ShortStoriesButton'
// import { loginUser } from './LoginButtonActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // onLoginUserClick: (event) => {
//     //   event.preventDefault();

//     //   dispatch(loginUser())
//     }
//   }
// }

const ShortStoriesContainer = connect(
  mapStateToProps
//   mapDispatchToProps
)(ShortStoriesButton)

export default ShortStoriesContainer
