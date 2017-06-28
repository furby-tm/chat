import { Controller } from 'angular-ecmascript/module-helpers';
import Moment from 'moment';

export default class ChatsCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'Ethan Gonzalez',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        lastMessage: {
          text: 'You on your way?',
          timestamp: Moment().substract(1, 'hours').toDate()
        }
      },
      {
        _id: 1,
        name: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
        lastMessage: {
          text: 'Hey, it\'s me',
          timestamp: Moment().subtract(4, 'days').toDate()
        }
      },
      {
        _id: 4,
        name: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        lastMessage: {
          text: 'This is wicked good ice cream.',
          timestamp: Moment().subtract(2, 'weeks').toDate()
        }
      }
    ];
  }
}

ChatsCtrl.$name = 'ChatsCtrl';
