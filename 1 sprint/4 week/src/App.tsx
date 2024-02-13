import React from 'react';
import './App.css';
import {UniButton} from './components/UniButton';
import {Shoes} from './components/Shoes';


export type Tasks = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    const tasks = [
        {id: 1, title: 'html', isDone: false},
        {id: 2, title: 'css', isDone: true},
        {id: 3, title: 'js', isDone: false},
    ]

    return (
        <div>
            <UniButton name={'btn'} onClick={() => {}} children={'default'}/>
            <UniButton name={'btn'} color={'red'} onClick={() => {}} children={'red'}/>
            <UniButton name={'btn'} color={'secondary'} onClick={() => {}} children={'secondary'}/>
            <UniButton name={'btn'} disabled onClick={() => {}} children={'disabled'}/>
            <hr/>

            <Shoes tasks={tasks}>
                <UniButton name={'btn'} onClick={() => {}} children={'default'}/>
                <UniButton name={'btn'} color={'red'} onClick={() => {}} children={'red'}/>
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
            </Shoes>
            
            <hr/>

            <Shoes tasks={tasks}>
                <input type="text"/>
                <UniButton name={'btn'} onClick={() => {}} children={'default'}/>
                
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
                <p>asdasdajsdkjash asjhdajksh dkahsd kjashdkajhs</p>
            </Shoes>

        </div>
    );
}


export default App;
