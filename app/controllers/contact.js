import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Send Message',
  responseMessage: '',
  emailAddress: '',
  message:'',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    sendEmail() {
      alert(`Sending message to the following email address is in progress: ${this.get('emailAddress')}.It says: ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We've sent your message to : ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
