import ReduxClass from '../../pages/redux/reduxUse'
import ReduxHook from '../../pages/redux/reduxUseHook'
// hook
import HookBasic from '../../pages/hook/hookBasic'
import { ReactNode } from 'react'

export const routes: Array<routesProps> = [
  { 
    name: 'redux',
    children: [
      {
        title: 'redux的使用',
        component: ReduxClass,
        path: '/redux/use'
      },
      {
        title: 'redux的使用(hook篇)',
        component: ReduxHook,
        path: '/redux/hook'
      }
    ]
  },
  { 
    name: 'hook',
    children: [
      {
        title: 'useState,useEffect',
        component: HookBasic,
        path: '/hook/basic'
      },
      {
        title: 'useCallback',
        component: HookBasic,
        path: '/hook/useCallback'
      }
    ]
  }
]

interface objOf {
  title:  string,
  component: ReactNode,
  path: string
}

export interface routesProps {
  name:  string,
  children: Array<objOf>
}
