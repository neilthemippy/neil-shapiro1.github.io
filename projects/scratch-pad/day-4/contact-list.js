// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
// returning an object with keys as the parameters and the values as the parameters
    return {
        id: id,
        nameFirst: nameFirst,  
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; 
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
            // creating addContact function that takes in a contact as a parameter 
        addContact: function(contact){
            contacts.push(contact); // pushing the contact into the contacts array 
        }, 
            // creating function findContact that takes parameter of fullname 
        findContact: function(fullName){
                // iterating through the contacts array 
            for(var i = 0; i < contacts.length; i++){
                        // if the index value of contacts @ first name concat with a space and index value of contacts @ first name 
                        // strictly equals full name return the contact value 
                if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName){
                    return contacts[i]; 
                } else{ // if contact fullname does not equal return undefined 
                    return undefined; 
                }
            }

        }, 
            // creating function remove contact that takes the contact parameter 
        removeContact: function(contact){
            contacts.pop(); // remove contact from the array using .pop which takes off the end of the array 
        }, 
// creating function printAllContact names 
        printAllContactNames: function(){
               var printedName = ""; // creating variable printedName and setting it equal to empty array 
            for(var i = 0; i < contacts.length; i++){ // iterating through the contacts array 
            if(printedName !== ""){ // if printedName does not equal empty string add a line break 
                    printedName += "\n"
            } // printedName equals the firstname value + space + lastname value
            printedName += contacts[i].nameFirst + " " + contacts[i].nameLast;
            } // return printedName string
            return printedName; 
        },

    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
