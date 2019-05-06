import Taro, { Component } from '@tarojs/taro';
import { View, Input } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import TodoList from '../../components/TodoList'
import './index.scss';
 
@connect(({todolist}) => ({
  ...todolist,
}))
export default class Todolist extends Component {
  config = {
    navigationBarTitleText: 'ToDoList',
  };

  componentDidMount = () => {
  };

  state = {
  }

  onSubmit(e) {
    const doinglist = [...this.props.doinglist]
    doinglist.push(this.props.inputValue)
    if (!this.props.inputValue) return
    this.props
      .dispatch({
        type: 'todolist/save',
        payload: {
          doinglist,
          inputValue: ''
        }
      })
  }

  onInput = event => {
    const {value, id} = event.target
    this.props
      .dispatch({
        type: 'todolist/save',
        payload: {
          [id]: value
        }
      })
  }

  onClickDoing(idx) {
    const donelist = [...this.props.donelist]
    const doinglist = [...this.props.doinglist]
    const delItem = doinglist.splice(idx, 1)
    this.props
      .dispatch({
        type: 'todolist/save',
        payload: {
          doinglist,
          donelist: [...donelist, delItem],
        }
      })
  }

  onClickDone(idx) {
    const donelist = [...this.props.donelist]
    const doinglist = [...this.props.doinglist]
    const delItem = donelist.splice(idx, 1)
    this.props
      .dispatch({
        type: 'todolist/save',
        payload: {
          doinglist: [...doinglist, delItem],
          donelist
        }
      })
  }

  onDeleteDoing(idx) {
    const doinglist = [...this.props.doinglist]
    doinglist.splice(idx, 1)
    this.props
      .dispatch({
        type: 'todolist/save',
        payload: {
          doinglist
        }
      })
  }

  onDeleteDone(idx) {
    const donelist = [...this.props.donelist]
    donelist.splice(idx, 1)
    this.props
      .dispatch({
        type: 'todolist/save',
        payload: {
          donelist
        }
      })
  }

  onClickBox() {
    const list = [...this.props.list]
    list.splice(0, 1)
    this.props
      .dispatch({
        type: 'todolist/save',
        payload: {
          list
        }
      })
  }

  render() {
    // const { donelist} = this.state
    const { list, doinglist, inputValue, donelist } = this.props
    console.log('doinglist', doinglist)
    return (
      <View className="todolist-page">
        <View className="flex-row-center top-box">
          <Input
            type="text"
            className="form-input"
            placeholder="添加ToDo"
            autoFocus={true}
            value={inputValue}
            id="inputValue"
            onInput={this.onInput}
            onConfirm={this.onSubmit} />
            {/*<View
              className="add-btn flex-row-end-center"
              onClick={this.onSubmit}>
                <Text>添加</Text>
             </View>*/}
        </View>
        <TodoList
          title="正在进行"
          onClick={this.onClickDoing}
          onDelete={this.onDeleteDoing}
          list={doinglist}
        />
        <TodoList
          title="已经完成"
          onClick={this.onClickDone}
          onDelete={this.onDeleteDone}
          list={donelist}
        />
      </View>
    )
  }
}
