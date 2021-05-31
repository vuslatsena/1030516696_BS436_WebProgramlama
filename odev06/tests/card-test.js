
test('Geçersiz tag',()=>{
    expect(()=>Card(-1)).toThrow();
    expect(()=>Card(0)).toThrow();
    

});