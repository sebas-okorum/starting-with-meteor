import { Meteor } from "meteor/meteor";
import "../api/collections/ContactsCollection";
import "../api/collections/TransactionsCollection";
import "../api/collections/WalletsCollection";
import "../api/methods/ContactsMethods";
import "../api/methods/TransactionsMethods";
import "../api/publications/ContactsPublications";
import "../api/publications/WalletsPublications";
import { WalletsCollection } from "../api/collections/WalletsCollection";
import "../infra/CustomError";
import '../infra/Accounts';

Meteor.startup(async () => {
  const walletCount = await WalletsCollection.find().countAsync();
  if (walletCount === 0) {
    WalletsCollection.insert({
      createdAt: new Date(),
    });
  }
});
