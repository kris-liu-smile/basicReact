import ReduxClass from '../../pages/redux/reduxClass'
import ReduxHook from '../../pages/redux/reduxHook'

export const routes: Array<routesProps> = [
  { 
    name: 'redux',
    children: [
      {
        title: 'classz中redux的使用',
        component: ReduxClass,
        path: '/redux/class'
      },
      {
        title: 'hook中redux的使用',
        component: ReduxHook,
        path: '/redux/hook'
      }
    ]
  }
]

interface objOf {
  title:  string,
  component: any,
  path: string
}

export interface routesProps {
  name:  string,
  children: Array<objOf>
}
