import { Contact } from 'domain/entities/contact';

export interface ContactsState {
  contacts: Contact[];
  contactsLoading: boolean;
}
