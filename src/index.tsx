import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {RecoilRoot} from 'recoil';
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ChakraProvider>
                <App/>
            </ChakraProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
)
