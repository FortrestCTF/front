import React from 'react'
import styles from './flags.module.css'
import PopUpFlag from '../../Components/Popupflag'

class FlagItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Popup: false,
            done: this.props.done
        };

        this.onClickSolve = this.onClickSolve.bind(this);
        this.onClickGood = this.onClickGood.bind(this);
    }
    onClickSolve()
    {
        this.setState({Popup: !this.state.Popup});
    }

    onClickGood()
    {
        this.setState({done: true})
    }
    render() {
        return (
            <div className={styles.container}>
                <h1>{this.props.name}</h1>
                <br className={styles.br}/>
                <h2 className={styles.h2}>{this.props.value} Points</h2>
                {this.state.done ? <span>Done</span> : null}
                <button onClick={this.onClickSolve} disabled={this.state.done}>Solve</button>
                {this.state.Popup ? <PopUpFlag h1={this.props.name} h2={this.props.description} url={this.props.url} flag={this.props.flag} closePopup={this.onClickSolve} goodTry={this.onClickGood}/> : null}
            </div>
        )
    }
}

export default FlagItem;