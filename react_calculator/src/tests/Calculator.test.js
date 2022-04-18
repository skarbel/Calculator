import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 to get 5', () => {
    const button1 = container.find('#number1');
    const addButton = container.find('#operator_add');
    const button4 = container.find('#number4');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should substract 4 from 7 to get 3', () => {
    const button7 = container.find('#number7')
    const substractButton = container.find('#operator-subtract')
    const button4 = container.find('#number4')
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total')
    button7.simulate('click')
    substractButton.simulate('click')
    button4.simulate('click')
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3')
    const multiplyButton = container.find('#operator-multiply')
    const button5 = container.find('#number5')
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total')
    button3.simulate('click')
    multiplyButton.simulate('click')
    button5.simulate('click')
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15')
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const divideButton = container.find('#operator-divide')
    const button7 = container.find('#number7')
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total')
    button2.simulate('click')
    button1.simulate('click')
    divideButton.simulate('click')
    button7.simulate('click')
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('concatenate multiple number button clicks', () => {
    const button3 = container.find('#number3')
    button3.simulate('click')
    button3.simulate('click')
    button3.simulate('click')
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('333')
  })

  it('should chain multiple operations together', () => {
    const button7 = container.find('#number7')
    const addButton = container.find('#operator_add');
    const button3 = container.find('#number3')
    const substractButton = container.find('#operator-subtract')
    const button1 = container.find('#number1');
    const multiplyButton = container.find('#operator-multiply')
    const button2 = container.find('#number2')
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total')
    button7.simulate('click')
    addButton.simulate('click');
    button3.simulate('click')
    substractButton.simulate('click')
    button1.simulate('click')
    multiplyButton.simulate('click')
    button2.simulate('click')
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('18')
  })

  it('clear the running total without affecting the calculation', () => {
    const button5 = container.find('#number5');
    const add = container.find('#operator_add');
    const button1 = container.find('#number1');
    const clear = container.find('#clear');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button5.simulate('click');
    add.simulate('click');
    button1.simulate('click');
    clear.simulate('click');
    add.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('10');
  })

  it('should give error when divided by 0', () => {
    const button5 = container.find('#number5');
    const divideButton = container.find('#operator-divide')
    const button0 = container.find('#number0');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button5.simulate('click');
    divideButton.simulate('click')
    button0.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('Infinity');
  })

})

