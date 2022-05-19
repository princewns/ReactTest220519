import { Component } from "react";

class ListAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputId : 3,
      inputText : '',
      lists : [
        {id : 1, text : '내용'},
        {id : 2, text : '메모를 만들었습니다.'}
      ]
    }
  };
  changeText = (e) => this.setState({
    [e.target.name] : e.target.value
  });
  getText = () => {
    const nextText = this.state.lists.concat({
      id : this.state.inputId,
      text : this.state.inputText,
    });
    this.setState({lists : nextText});
    this.setState((pr) => ({inputId : pr.inputId + 1}));
  };
  deleteList = (id) => {
    const nextText = this.state.lists.filter((l) => l.id !== id);
    this.setState({ lists : nextText });
  }

  render() {
    const {lists} = this.state;
    return(
      <div>
        <h1>메모</h1>
        <input type='text' name='inputText' onChange={this.changeText} id='text'></input>
        <button onClick={this.getText}>추가</button>
        <ul>
          {lists.map((l) => (
            <li key={l.id}>{l.text}<button onClick={
              () => {this.deleteList(l.id)}
            }>X</button></li>
          ))}
        </ul>
      </div>
    );
  };
};

export default ListAdd;
