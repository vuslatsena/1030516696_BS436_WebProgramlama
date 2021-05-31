const React=require('react');
const {mount}=require('enzyme');
const {Game, default: CardGame}=require('../src/client/game');

test('Game oluşturuldu',()=>{
const component=mount(<CardGame/>);
const elements=component.find('.col-md-4');
expect(elements.length).toEqual(3);
});

test('Card Click',()=>{
    const component=mount(<CardGame/>);
    const clickableCard=component.find('.cardclick');
    expect(clickableCard).toBeDefined();
});

test('',()=>{
    const component=mount(<CardGame/>);
    const srcName=component.find(".cardclik").prop("src");
    expect(srcName === 'img/car.jpg' || srcName ===
'img/dog.jpg').toBeTruthy();

});
test('Result Message',()=>{
    const component=mount(<CardGame/>);
    const message=component.find("#text").prop("text");
    expect(message).toBeDefined();

});
test("Multiple test", () => {
    let component = mount(<CardGame/>);

    let message = undefined;

    global.alert = (s) => {message = s};

    for(let i=0;i<50;i++){

    const results = component.find('.cardclick');
    results.simulate('click');
    expect(message).toBeDefined();
    message = undefined;
    component = mount(<CardGame/>);

    }
})