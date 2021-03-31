const React = require('react');
const {mount} = require('enzyme');
const {Game} = require('../src/Game');

//Kaybetme Durumu Testi

test('lose',() =>{
    const driver = mount(<Game/>);
    //mount içinde yazan componentin adı. HTML dosyamızın içerisinde gömülmüş oluyor.
    let card = driver.find('.card').at(0);
    //css elemanlarını alıyoruz.
    card.simulate('click');
    card.find("img").prop("src");

    card = driver.find('.card').at(0);
    let srcName = card.find("img").prop("src")
    expect(srcName === 'img/Kopek.jpg');

} )

//Kazanma Durumu Testi

test('win',() =>{
    const driver = mount(<Game/>);

    let card = driver.find('.card').at(0);

    card.simulate('click');
    card.find("img").prop("src");

    card = driver.find('.card').at(0);
    let srcName = card.find("img").prop("src")
    expect(srcName === 'img/Kedi.jpg');

} )

//Kart Tıklama Durumu Testi

test('CardClick',()=>{
    const driver = mount(<Game/>);

    let card = driver.find('.card').at(0);

    card.simulate('click');
    card.find("img").prop("src");

    card = driver.find('.card').at(1);
    card.simulate('click');

    card = driver.find('.card').at(2);
    card.simulate('click');

    card = driver.find('.card').at(0);
    let srcName = card.find("img").prop("src")
    expect(srcName === 'img/Kopek.jpg' || srcName ==='img/Kedi.jpg').toBeTruthy();

} )

//Yeni Oyun Durumu Testi

test('newGame' ,() =>{
    const driver = mount(<Game/>);
    let card = driver.find('.card').at(0);
    card.simulate('click');
    card = driver.find('.card').at(1);
    card.simulate('click');

    let yenidenBaslat = driver.find('.link');
    yenidenBaslat.simulate('click');


} )

