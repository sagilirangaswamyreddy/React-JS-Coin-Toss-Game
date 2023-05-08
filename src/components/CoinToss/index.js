// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {totalCount: 0, headsCount: 0, tailsCount: 0, headsImage: true}

  onTossCoinButtonClicked = () => {
    const {totalCount, headsCount, tailsCount} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    this.setState({totalCount: totalCount + 1})

    if (tossResult === 0) {
      this.setState({headsCount: headsCount + 1})
      this.setState({headsImage: true})
    } else {
      this.setState({tailsCount: tailsCount + 1})
      this.setState({headsImage: false})
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, headsImage} = this.state

    const imageUrl = headsImage
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para-styles">Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" />
          <button
            type="button"
            className="btn"
            onClick={this.onTossCoinButtonClicked}
          >
            Toss Coin
          </button>
          <div className="items-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
