import React, {Component} from "react";
import Splash from "./Splash";
import Main from "./Main";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowSplash: true,
        };
    }

    render() {
        if (this.state.isShowSplash) {
            return <Splash onAnimationEnd={() => this.setState({isShowSplash:false})}/>;
        } else {
            return (
                <Main/>
            );
        }
    }
}

export default App;