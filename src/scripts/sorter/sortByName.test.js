// Project files
import sortByName from "./sortByName"

test("Pass when a regular list is sorted correctly",()=>{
//Arrange
const RegularList = [{"name":"Raya"},{"name":"Yamen"},{"name":"Omar"}];
const resultList = [ { name: 'Omar' }, { name: 'Raya' }, { name: 'Yamen' } ];

//Act
const sortedList = sortByName(RegularList);

//Assert
expect(sortedList).toStrictEqual(resultList);
})

test("Pass when a list with leading numbers is sorted correctly",()=>{
    //Arrange
    const ListWithNumbers = [{"name":"5Raya"},{"name":"3Yamen"},{"name":"9Omar"}];
    const resultList = [ { name: '3Yamen' }, { name: '5Raya' }, { name: '9Omar' } ];
    
    //Act
    const sortedList = sortByName(ListWithNumbers);
    
    //Assert
    expect(sortedList).toStrictEqual(resultList);
    })
    
test("Throw error when a list contains a whitespace element",()=>{
        //Arrange
        const ListWithEmptyName = [{"name":""},{"name":"Yamen"},{"name":"Omar"}];
        
        //Act
        const sortedList = ()=>sortByName(ListWithEmptyName);
        
        //Assert
        expect(sortedList).toThrow("the List contains an empty name, please add a valid name to sort");
        })
    
    