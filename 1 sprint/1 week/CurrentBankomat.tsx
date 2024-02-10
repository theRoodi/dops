import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    const banknotesFilter = props.money.banknotes === 'Dollars' ? 'chartreuse' : 'cadetblue'

    return (
            <Banknotes color={banknotesFilter}>
                <Name>
                    {props.money.banknotes}
                </Name>
                <Nominal>
                    {props.money.value}
                </Nominal>
            </Banknotes>
    );
};

type Props = {
    color: string
}

const Banknotes = styled.div<Props>`
  background-color: ${props => props.color};
  width: 400px;
  height: 200px;
  margin: 25px;
`

const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`

const Nominal = styled.div`
  display: flex;
  justify-content: center;
  font-size: 90px;
  margin-top: 30px;
`