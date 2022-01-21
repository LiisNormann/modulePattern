//revealing module pattern 
//it will be Item controller
const ItemController = (function() {
    //empty string for data insertion
    let data = [];
    
    function add(item) {
        data.push(item);
        console.log('Item is added');
    }
    
    function get(id) {
        return data.find(item => {
            return item.id === id
        })
    }
    
    return {
        add: add,
        get: get
    }
})();

ItemController.add({id: 1, name: 'Kate'});
console.log(ItemController.get(1))

/*// standard module pattern
//it will be UI controller
const UIController = (function() {
    //declare private variables and functions
    let text = 'Hello World';

    const changeText = function() {
        const element = document.querySelector('h1')
        element.textContent = text
    }
    return {
        //declare public variables and functions
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

UIController.callChangeText();*/

