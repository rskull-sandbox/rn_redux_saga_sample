import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../navigators/AppNavigators'

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.navigate({ routeName: 'Home' })
)

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}

export default navReducer
