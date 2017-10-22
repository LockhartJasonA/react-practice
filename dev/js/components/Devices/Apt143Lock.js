import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Lock extends Component {

    render() {
        return (
            <div>
                <div className="device-title">
                    {this.normalizeTitle()}
                </div>
                <div>
                    <button className="lock-unlock-button" onClick={this.performLockUnlock}>
                        {this.buttonText(this.props.device.state)}
                    </button>
                </div>
            </div>
        );
    }

    buttonText(text) {
       return text.charAt(0).toUpperCase() + text.slice(1);
    }

    normalizeTitle() {
        let title = this.props.device.slug.replace(/-/g, " ");
        return title.replace(/\b\w/g, word => word.toUpperCase())
    }

    performLockUnlock = () => {
        this.props.performLockUnlock(this.props.device.state);
    };

}

Lock.propTypes = {
    device: PropTypes.object,
    performLockUnlock: PropTypes.func
};


export default Lock;