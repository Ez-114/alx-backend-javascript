import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default async function handelProfileSignup(firstName, lastName, fileName) {
  const result = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return result.map((obj) => ({
    status: obj.status,
    value: obj.value === 'fulfilled' ? obj.value : String(obj.reason),
  }));
}
