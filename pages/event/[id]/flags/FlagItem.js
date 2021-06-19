import React from 'react'

class FlagItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Popup: false
        };
    }
    onClickSolve()
    {
        this.setState({Popup: !this.state.Popup});
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.value}</h2>
                {this.props.done ? <h3>Done</h3> : null}
                <button>Solve</button>
            </div>
        )
    }
}

export default FlagItem;