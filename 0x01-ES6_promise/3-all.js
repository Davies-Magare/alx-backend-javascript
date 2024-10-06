import uploadPhoto from "./utils.js";
import createUser from "./utils.js";

export default function handleProfileSignup() {
 return uploadPhoto().then((photoResult) => { return createUser().then((userResult) => { console.log(photoResult.body, userResult.firstName, userResult.lastName); }); })
 .catch(() => { console.log ('Signup system offline') });
}
