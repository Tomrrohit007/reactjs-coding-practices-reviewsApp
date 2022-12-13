import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onPrevious = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevCount => ({index: prevCount.index - 1}))
    }
  }

  onNext = () => {
    const {reviewsList} = this.props
    const length = reviewsList.length - 1
    const {index} = this.state
    if (index < length) {
      this.setState(prevCount => ({index: prevCount.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const profile = reviewsList[index]
    const {username, imgUrl, description, companyName} = profile

    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>
        <div className="card">
          <img src={imgUrl} alt={username} />
          <div className="name-and-buttons">
            <button
              className="button"
              onClick={this.onPrevious}
              testid="leftArrow"
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                className="arrow"
                alt="left arrow"
              />
            </button>
            <p className="name">{username}</p>
            <button
              className="button"
              onClick={this.onNext}
              testid="rightArrow"
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                className="arrow"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
