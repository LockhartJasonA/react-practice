import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Alarm from '../components/Devices/Apt143Alarm';
import Lock from '../components/Devices/Apt143Lock';
import SmokeDetector from '../components/Devices/Apt143SmokeDetector';
import Thermostat from '../components/Devices/Apt143Thermostat';
import {performLockUnlock} from "../actions/index";

class Device extends Component {

    render() {
        return (
            <div className="page-container">
                {this.renderDevice()}
            </div>
        );
    }

    renderDevice() {
        let slug = this.props.match.params.device_name;
        let device = this.props.devices.devices.find((item) => {
            return item.slug === slug
        });
        switch(slug) {
            case 'apt-143-alarm':
                return <Alarm/>;

            case 'apt-143-lock':
                return <Lock device={device} performLockUnlock={this.props.performLockUnlock}/>;

            case 'apt-143-thermostat':
                return <SmokeDetector/>;

            case 'apt-143-smoke-detector':
                return <Thermostat/>;
        }
    }

}

Device.propTypes = {
    devices: PropTypes.object
};

function mapStateToProps(state) {
    return {
        devices: state.devices,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
            performLockUnlock: performLockUnlock
        }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Device);