import React from 'react'
import ReactDOM from 'react-dom'
import './Presenter.css'


const Transitions = {
  FADE: 'fade',
  SLIDE: 'slide',
}

const PresenterStatus = {
  INIT: 0,
  LOADED: 1,
  PLAYING: 2,
  PAUSED: 3,
  STOPPED: 4,
}

const ItemStatus = {
  INIT: 0,
  LOADED: 1,
  ENTERING: 2,
  ENTERED: 3,
  LEAVING: 4,
  LEFT: 5,
}

const PresenterDirection = {
  RIGHT: 0,
  LEFT: 1,
}

const DEFAULT_STARTING_TIMEOUT = 1000
const DEFAULT_ANIMATION_DURATION = 300
const DEFAULT_TIMEOUT = 3000

class PresenterItem extends React.Component {
  render() {
    const { item, animationDuration, className } = this.props
    if (item) {
      return (
        <div style={{ transition: `${animationDuration || DEFAULT_ANIMATION_DURATION}ms`}} className={"item " + className} >
          <img src={item.image} />
          <div className="text">
            <p>{item.text}</p>
          </div>
        </div>
      )
    } else return null
  }
}

class Presenter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: -1,
      status: PresenterStatus.INIT,
      current: null,
      direction: PresenterDirection.LEFT,
    }
    this.timerChange = null

    this.loadNextItem = this.loadNextItem.bind(this)
    this.setupNode = this.setupNode.bind(this)

    this.handleStart = this.handleStart.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
    this.handleNodeAnimStart = this.handleNodeAnimStart.bind(this)
    this.handleNodeAnimEnd = this.handleNodeAnimEnd.bind(this)

    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }

  componentWillMount() {
    const { items } = this.props
    
    this.loadNextItem(ItemStatus.LOADED)
  }

  componentDidMount() {
    this.setState({
      status: PresenterStatus.LOADED,
    })
    this.timerStart = setTimeout( this.handleStart, DEFAULT_STARTING_TIMEOUT )
  }

  handleNext() {
  }

  handlePrev() {

  }

  loadNextItem(initialState) {
    const { current, index, direction } = this.state
    const { items } = this.props
    
    var nidx = index

    if (direction === PresenterDirection.RIGHT) {
      nidx = (index +1) < items.length ? index +1: 0
    } else {
      nidx = (index -1) >= 0 ? index -1: items.length-1
    }

    this.timerChange = null
    if (current && current.node) {
      current.node.removeEventListener("transitionend", this.handleNodeAnimEnd)
    }

    this.setState({
      index: nidx,
      current: {
        item: items[nidx],
        status: initialState ? initialState: ItemStatus.ENTERING,
        node: null,
      }
    })
  }

  handleStart() {
    this.setState({
      status: PresenterStatus.PLAYING,
      current: {
        ...this.state.current,
        status: ItemStatus.ENTERING,
      }
    })
  }

  handleStartChange () {
    const { items, start } = this.props

    this.setState({
      current: {
        ...this.state.current,
        status: ItemStatus.LEAVING,
      },
    })
  }

  setupNode(node, item) {
    const { current } = this.state
    if (node && !current.node) {
      const DOMNode = ReactDOM.findDOMNode(node)
      this.setState({
        current: {
          ...this.state.current,
          node: DOMNode,
        }
      })
      DOMNode.addEventListener('transitionend', this.handleNodeAnimEnd, false)
    }
  }

  handleNodeAnimStart(e) {
    const { current: { status } } = this.state
    this.setState({
      current: {
        ...this.state.current,
        inTransition: true,
      }
    })
  }

  handleNodeAnimEnd(e) {
    const { current: { status } } = this.state
    this.setState({
      current: {
        ...this.state.current,
        inTransition: false,
      }
    }, () => {
      if (status === ItemStatus.ENTERING) {
        // Not called the timeout, yet.
        if (this.timerChange === null) 
          this.timerChange = setTimeout(this.handleStartChange, DEFAULT_TIMEOUT )
      } else if (status === ItemStatus.LEAVING) {
        this.loadNextItem()
      }
    })
  }
  

  render() {
    const { current, next, status } = this.state
    if (current && current.status >= ItemStatus.LOADED) {
      return (
        <div className="presenter"> 
          <div className="viewer">
            <PresenterItem ref={(node) => this.setupNode(node, current)} item={current.item} className={"current fade " + (current.status === ItemStatus.ENTERING ? 'start': 'end')}/>
          </div>
          <div className="bar">
            <div className="bar-left">
              <button className="prev" onClick={this.handlePrev}>PREV</button>
              <button className="next" onClick={this.handleNext}>NEXT</button>
            </div>
            <div className="bar-right">
              <button className="next">SCROLL</button>
            </div>
          </div>
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }

}

export default Presenter

