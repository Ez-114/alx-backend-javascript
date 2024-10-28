import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  try {
    const user = await createUser();
    const photo = await uploadPhoto();

    result = { photo, user };
  } catch (err) {
    result = { photo: null, user: null };
  }

  return result;
}
