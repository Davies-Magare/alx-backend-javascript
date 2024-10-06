import createUser, { uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  return uploadPhoto().then((result) => createUser().then((result1) => { console.log(result.body, result1.firstName, result1.lastName); }).catch(() => { console.log('Signup system offline'); }));
}
