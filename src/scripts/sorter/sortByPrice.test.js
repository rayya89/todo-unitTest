import sortByPrice from "./sortByPrice"

test("Pass when a regular list is sorted correctly",()=>{
//Arrange
const RegularList = [{"price":88},{"price":55},{"price":100}];
const resultList = [ { price: 100 }, { price: 88 }, { price: 55 } ];

//Act
const sortedList = sortByPrice(RegularList);

//Assert
expect(sortedList).toStrictEqual(resultList);
})

test("Throw error when a price is negative",()=>{
    //Arrange
    const ListWithNegative = [{"price":-1},{"price":55},{"price":100}];
    
    //Act
    const sortedList = ()=> sortByPrice(ListWithNegative);
        
    //Assert
    expect(sortedList).toThrow("A price can't be 0 or negative");
    })

test("Throw error when a price is 0",()=>{
        //Arrange
        const ListWithZero = [{"price":0},{"price":55},{"price":100}];
        
        //Act
        const sortedList = ()=> sortByPrice(ListWithZero);
            
        //Assert
        expect(sortedList).toThrow("A price can't be 0 or negative");
    })

