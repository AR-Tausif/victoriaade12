import { getToken } from "firebase/messaging";
import { messaging } from "../firebase";

export const generateFCMToken = async () => {
  const token = await getToken(messaging, {
    vapidKey:
      "BLoTpmU-iFcBLTvjxuaGzp2lfGypMuqbHw9aBkx8O4GJ8bNZmh1uE56naSphY9lemerE4Zfr3K4OqNterWgTVis",
  });

  console.log(`|===> getting token | <==== ${token}`);

  return token;
};
