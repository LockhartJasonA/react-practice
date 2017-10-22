import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

class DeviceList extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="device-list">
                    <div className="device-list-header">
                        Feel free to use one of our devices below.
                    </div>
                {
                    this.props.devices.devices.map((device, index) => (
                        <div key={index} className="device-link">
                            <Link to={`/devices/${device.slug}`}>{this.normalizeTitle(device.slug)}</Link>
                        </div>
                    ))
                }
                </div>
            </div>
        );
    }

    normalizeTitle(slug) {
        let title = slug.replace(/-/g, " ");
        return title.replace(/\b\w/g, word => word.toUpperCase())
    }
}

DeviceList.propTypes = {
    devices: PropTypes.object
};


function mapStateToProps(state) {
    return {
        devices: state.devices,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DeviceList);