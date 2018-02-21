import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import './Presenter.css'

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

export const PresenterDirection = {
  RIGHT: 2,
  LEFT: 3,
}


const TransitionHorizontalSlide = {
// STYLE TO DISPLAY THE SLIDE
  normal: {
    opacity: 1,
    left: 0,
    right: 0,
  },

// STYLE TO START SLIDE
  enter: {
    opacity: 0,
    left: '-100%',
    right: '100%',
  },

// STYLE TO FINISH SLIDE
  left: {
    opacity: 0,
    left: '100%',
    right: '-100%',
  }
}

class PresenterItem extends React.Component {
  render() {
    const { item, transitionDuration, enterStyle, stateStyle, className } = this.props
    if (item) {
      return (
        <div style={stateStyle} className={"item " + className} >
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
      direction: props.direction,
    }
    this.timerChange = null

    this.setupNode = this.setupNode.bind(this)

    this.handleStart = this.handleStart.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
    this.handlePausePlay = this.handlePausePlay.bind(this)
    this.handleNodeAnimEnd = this.handleNodeAnimEnd.bind(this)

    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }

  componentDidMount() {
    const { startTimeout } = this.props
    this.setState({
      status: PresenterStatus.LOADED,
    })
    this.timerStart = setTimeout(this.handleStart, startTimeout)
  }

  handleStart() {
    const next  = this.loadNextItem()
    this.setState({
      status: PresenterStatus.PLAYING,
      index: next.index,
      current: {
        item: next.item,
        status: ItemStatus.LOADED,
      }
    })
  }

  handleNext() {
    const next  = this.loadNextItem(PresenterDirection.RIGHT)
    if (this.timerChange) {
      clearTimeout(this.timerChange)
      this.timerChange = null
    }

    this.setState({
      index: next.index,
      direction: PresenterDirection.RIGHT,
      current: {
        item: next.item,
        status: ItemStatus.LOADED,
      }
    })
  }

  handlePrev() {
    const next  = this.loadNextItem(PresenterDirection.LEFT)
    if (this.timerChange) {
      clearTimeout(this.timerChange)
      this.timerChange = null
    }

    this.setState({
      index: next.index,
      direction: PresenterDirection.LEFT,
      current: {
        item: next.item,
        status: ItemStatus.LOADED,
      }
    })
  }

  loadNextItem(dir = null) {
    const { current, index, direction } = this.state
    const { items } = this.props
    
    var nidx = index

    const d = dir ? dir:  direction

    if (d === PresenterDirection.RIGHT) {
      nidx = (index +1) < items.length ? index +1: 0
    } else {
      nidx = (index -1) >= 0 ? index -1: items.length-1
    }

    return {
      index: nidx,
      item: items[nidx],
    }
  }

  handleEnd () {
    this.setState({
      current: {
        ...this.state.current,
        status: ItemStatus.LEAVING,
      },
    })
  }

  trickyStart() {
    return setTimeout(() => {
      this.setState({
        current: {
          ...this.state.current,
          status: this.state.current.status+1
        }
      })
    }, 20)
  }


  handlePausePlay() {
    const { timeout } = this.props
    if (this.timerChange) {
      clearTimeout(this.timerChange)
      this.timerChange = null
    }

    const { status } = this.state

    if (status === PresenterStatus.PLAYING) {
      this.setState({
        status: PresenterStatus.PAUSED,
        current: {
          ...this.state.current,
          status: ItemStatus.ENTERED,
        }
      })
    } 
    else if (status === PresenterStatus.PAUSED){
      this.setState({
        status: PresenterStatus.PLAYING
      })
      if (this.timerChange) {
        clearTimeout(this.timerChange)
      }
      this.timerChange = setTimeout(this.handleEnd, timeout)
    }

  }

  trickyEnd() {
    return setTimeout(()=> {
      const next  = this.loadNextItem()
      this.state.current.node.removeEventListener('transitionend', this.handleNodeAnimEnd)
      this.setState({
        index: next.index,
        current: {
          item: next.item,
          status: ItemStatus.LOADED,
        }
      })
    }, 20)
  }

  setupNode(node) {
    const { current } = this.state
    if (node && !current.node && current.status === ItemStatus.LOADED ) {
      const DOMNode = ReactDOM.findDOMNode(node)
      this.setState({
        current: {
          ...this.state.current,
          node: DOMNode,
        },
      }, () => {
        this.trickyStart()
      })

      DOMNode.addEventListener('transitionend', this.handleNodeAnimEnd, false)
    }
  }

  handleNodeAnimEnd(e) {
    const { current: { node, status } } = this.state
    if (status === ItemStatus.ENTERING || status === ItemStatus.LEAVING ) {
      const { timeout  } = this.props
      const ns = status+1

      this.setState({
        current: {
          ...this.state.current,
          status: ns,
        }
      }, () => {
        if (this.state.status === PresenterStatus.PLAYING) {
          if (ns === ItemStatus.ENTERED) {
            this.timerChange = setTimeout(this.handleEnd, timeout)
          } else if (ns === ItemStatus.LEFT) {
            this.trickyEnd()
          }
        }
      })
    }
  }

  getStyle(status) {
    const { transitionDuration, transitions} = this.props
    switch(status) {
      case ItemStatus.LOADED: 
        return {
          transition: 'none',
          ...transitions.enter,
        }
      case ItemStatus.LEFT: 
        return {
          ...transitions.enter,
          transition: 'none'
        }
      case ItemStatus.ENTERING:
        return {
          transition: transitionDuration + 'ms',
          ...transitions.normal,
        }
      case ItemStatus.ENTERED:
        return transitions.normal
      case ItemStatus.LEAVING:
        return {
          transition: transitionDuration + 'ms',
          ...transitions.left
        }
    }
  }
  
  render() {
    const { current, next, status, } = this.state
    const { transitionDuration, rightBar } = this.props
    if (current && current.status >= ItemStatus.LOADED) {
      const st = this.getStyle(current.status)
      return (
        <div className="presenter"> 
          <div className="viewer">
            <PresenterItem transitionDuration={transitionDuration} 
              stateStyle={st} ref={(node) => this.setupNode(node)} item={current.item} 
            />
          </div>
          <div className="bar">
            <div className="bar-left">
              <button className="prev" onClick={this.handlePrev}>PREV</button>
              <button className="next" onClick={this.handleNext}>NEXT</button>
              <button className="pause" onClick={this.handlePausePlay}>
                {
                  (this.state.status === PresenterStatus.PLAYING) ? 'PAUSE': 'PLAY'
                }
              </button>
            </div>
            <div className="bar-right">
              {rightBar}
            </div>
          </div>
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

Presenter.propTypes = {
  normalStyle: PropTypes.object,
  enterStyle: PropTypes.object,
  leftStyle: PropTypes.object,

  startTimeout: PropTypes.number,
  transitionDuration: PropTypes.number,
  timeout: PropTypes.number,
  direction: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    text: PropTypes.string
  })).isRequired
}


Presenter.defaultProps = {
  direction: PresenterDirection.RIGHT,
  startTimeout: 500,
  transitionDuration: 250,
  timeout: 1000,
  transitions: TransitionHorizontalSlide
}

export default Presenter

