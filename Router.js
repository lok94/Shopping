import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import App from "./App";


class Router extends React.PureComponent {

    render() {

        return (
            <>
                <StatusBar
                    backgroundColor="#fff"
                    barStyle='dark-content'

                />
                <SafeAreaView
                    style={{
                        backgroundColor: '#fff',
                        flex: 1
                    }}>
                    <App />

                </SafeAreaView>
            </>
        );
    }
}


export default Router;
