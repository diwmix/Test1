const removeLetterZ = require('./target1.js')

//Видалення z
test("об'єднання", ()=>{
    expect(removeLetterZ(['Dream','Look'])).toBe('DreamLook')
})
test("пустий масив", ()=>{
    expect(removeLetterZ(['',''])).toBe('')
})
test("Видалення Z", ()=>{
    expect(removeLetterZ(['Zoo','Zoom'])).toBe('oooom')
})
test("Видалення Z", ()=>{
    expect(removeLetterZ(['ZZZ','zzz'])).toBe('')
})