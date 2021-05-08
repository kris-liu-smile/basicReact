import { FC } from 'react';
import { RouterProps } from 'react-router-dom'
import { connect } from 'react-redux'
// redux dispatch   2中 方式第一种引入action放在connect 或者直接dispatch  第二种 引入store
import { changeNum } from '../../store/action/testRedux'
import store from '../../store'
import {  Dispatch  } from 'redux'
import Layout from '../../component/layout'


interface dispatchProps extends Dispatch {
    changeNum?: any
}


interface props extends RouterProps{
    num: number,
    changeNum?: any,
    dispatch?: dispatchProps,
}

const ReduxLayout:FC<props> = (props) => {

    const  { num } = props

    // useEffect(() => {
    //     console.log(props)
    // },  [])

    const goToPersonRecord = () => {
        const { history } = props;
        history.push('/personRecord')
    }

    const addNum = (symbol: string) => {
        if (symbol === '+') {
            const { changeNum } = props
            const digital  = num + 1
            changeNum(digital)
        }
        if (symbol === '-') {
            const digital = num - 1
            store.dispatch(changeNum(digital))
        }
        if (symbol === '*') {
            // 想要一下方法需要把mapDispatchToProps 注释掉
            // props.dispatch(changeNum(digital))
            const { changeNum } = props
            const digital = num * 2
            changeNum(digital)
        }
    }

    console.log(11111111)
    return (
        // <>
        //     <div>Redux的使用</div>
        //     <div>{num}</div>
        //     <div onClick={() => {addNum('+')}}>点击+1</div>
        //     <div onClick={() => {addNum('-')}}>点击-1</div>
        //     <div onClick={() => {addNum('*')}}>点击*2</div>
        //     <div onClick={() => {goToPersonRecord()}}>goToPersonRecord</div>
        // </>
        <Layout />
    )
}

const mapDispatchToProps = {
    changeNum
}

const mapStateToProps = (state: {
    testRedux: {
        num: number
    }
}) => {
    const  { num } =  state.testRedux
    return {
        num
    }
}

// 要想使用dispatch,  connect 第二个值 不能存在
export default connect(mapStateToProps, mapDispatchToProps)(ReduxLayout)