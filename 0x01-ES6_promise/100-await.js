import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  try {
    const userResp = await createUser();
    const photoResp = await uploadPhoto();

    result = { photoResp, userResp };
  } catch (err) {
    result = { photo: null, user: null };
  }

  return result;
}
