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

const PresenterDirection = {
  RIGHT: 2,
  LEFT: 3,
}

const DEFAULT_STARTING_TIMEOUT = 1000
const DEFAULT_ANIMATION_DURATION = 1000
const DEFAULT_TIMEOUT = 4000


class PresenterItem extends React.Component {
  render() {
    const { item, transitionDuration, className } = this.props
    if (item) {
      return (
        <div style={{ transition: `${transitionDuration || DEFAULT_ANIMATION_DURATION}ms`}} className={"item fade " + className} >
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
      direction: props.direction || PresenterDirection.RIGHT,
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

  componentWillMount() {
    const { items } = this.props
  }

  componentDidMount() {
    const { startTimeout } = this.props
    this.setState({
      status: PresenterStatus.LOADED,
    })
    this.timerStart = setTimeout( this.handleStart, startTimeout || DEFAULT_STARTING_TIMEOUT )
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
      this.timerChange = setTimeout(this.handleEnd, timeout || DEFAULT_TIMEOUT )
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
          node: null,
        }
      })
    }, 20)
  }

  setupNode(node) {
    const { current } = this.state
    if (node && !current.node) {
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
        if (ns === ItemStatus.ENTERED) {
          this.timerChange = setTimeout(this.handleEnd, timeout || DEFAULT_TIMEOUT )
        } else if (ns === ItemStatus.LEFT) {
          this.trickyEnd()
        }
      })
    }
  }
  
  render() {
    const { current, next, status, rightBar } = this.state
    const { transitionDuration } = this.props
    if (current && current.status >= ItemStatus.LOADED) {
      var st = ''
      if (current.status === ItemStatus.ENTERING || current.status === ItemStatus.ENTERED) {
        st = 'start'
      } else if (current.status === ItemStatus.LEAVING || current.status === ItemStatus.LEFT) {
        st = 'end'
      }
      return (
        <div className="presenter"> 
          <div className="viewer">
            <PresenterItem transitionDuration={transitionDuration} ref={(node) => this.setupNode(node, current)} item={current.item} 
              className={st}/>
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
  startTimeout: DEFAULT_STARTING_TIMEOUT,
  transitionDuration: DEFAULT_ANIMATION_DURATION,
  timeout: DEFAULT_TIMEOUT,
}

export default Presenter

