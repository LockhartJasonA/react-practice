import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Device from '../containers/Device'
import DeviceList from './DeviceList'

class Devices extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/devices' component={DeviceList}/>
                <Route path='/devices/:device_name' component={Device}/>
            </Switch>
        );
    }
}

export default Devices;