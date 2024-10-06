import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      const resultArray = [];
      for (const object of result) {
        if ('status' in object && 'value' in object) {
          resultArray.push({ status: `${object.status}`, value: `${object.value}` });
        } else {
          resultArray.push({ status: `${object.status}`, reason: `${object.reason}` });
        }
      }
      return resultArray;
    });
}
