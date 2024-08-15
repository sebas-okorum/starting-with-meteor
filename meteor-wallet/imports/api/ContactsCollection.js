import {Mongo} from 'meteor/mongo';

export const ContactsCollection = new Mongo.Collection('contacts');

ContactsCollection.allow({
    insert(userId, doc) {
      return true;
    }
  });
  
export const insertContact = ({ name, email, imageURL}) => {
    try {
        ContactsCollection.insert({name, email, imageURL});
    } catch (error) {
        console.log(error);
    }
}
