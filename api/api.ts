import { AdvertsResponse } from "./interfaces/Advert";
import {SignInResponse} from "./interfaces/Auth";

const api = process.env.NEXT_PUBLIC_API_URL;
export const signIn = async (email:string, password:string): Promise<SignInResponse | {}> => {
  try {
    const res = await fetch(api + `/users/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password:password,
      }),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
    return {}

  }
};

export const getRegions = async () => {
  try {
    const res = await fetch(api + `/wb/regions/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNDg5Mjg4LCJpYXQiOjE3MDA0MDI4ODgsImp0aSI6ImRkOWJhMjA2NmI3ZjRiZTA5NzNiMmYwOGRmYjgzMzlhIiwidXNlcl9pZCI6MTk5N30.qiQZw713gd9WCwyQB1uYv0sygQYSlW6fR8ZPWcvrZQ8",
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAdverts = async (
  input: string,
  region_id: string,
  access: string,
): Promise<AdvertsResponse | []> => {
  try {
    const res = await fetch(
      api + `/wb/adverts?type=6&input=${input}&region_id=${region_id}`,
      {
        method: "GET",
        next: { revalidate: 0 },
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${access}`,
        },
      },
    );
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};
