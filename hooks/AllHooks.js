import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Favorite from "../components/Favourite/Favorite";

export const mainURL = "https://arabcoupon-mobile-app-server.vercel.app";


async function getToken() {
  const token = await AsyncStorage.getItem("accessToken");
  return token;
}
// STORE
export const useStore = () => {
  const [loadData, setloadData] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    const getCountry = async () => {
      const userStore = await AsyncStorage.getItem("couponCountry");
      return userStore;
    };
    const getStoreApi = async () => {
      const url = `${mainURL}/api/v1/store/?country=${await getCountry()}`;
      fetch(`${url}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data?.data);
          setloadData(false);
        })
        .catch((error) => {
          setErr(error);
        });
    };
    getStoreApi();
  }, [refetch]);
  return { data, setData, loadData, err, setRefetch };
};

export const useGetStoreById = () => {
  const getStoreById = async (id) => {
    const res = await fetch(`${mainURL}/api/v1/store/${id}`);
    const data = await res.json();

    return data;
  };
  return { getStoreById };
};

// GLOBAL SEARCH (recieve from search.js)
export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true); // for Loader
  const [error, setError] = useState(null); // handle error
  const [searchedData, setSearchedData] = useState([]);
  const [searchKey, setSearchKey] = useState(" ");

  // const handleGlobalSearch = () => {
  useEffect(() => {
    // const getCountry = async () => {
    //   const userCountry = AsyncStorage.getItem("couponCountry");
    //   return userCountry;
    // };

    const getSearchApi = async () => {
      const url = `${mainURL}/api/v1/post/search?searchTerm=${searchKey}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSearchedData(data?.data);
          // setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    };
    getSearchApi();
    // };
  }, [searchKey]);

  return {
    searchedData,
    isLoading,
    setIsLoading,
    setSearchKey,
    error,
    // handleGlobalSearch,
  };
};

//  NOTIFICATIONS
export const useNotification = () => {
  const [notify, setNotify] = useState([]);

  useEffect(() => {
    async function notification() {
      const token = await getToken();
      fetch(`${mainURL}/api/v1/user/notification/`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setNotify(data?.data?.newPosts);
        });
    }
    notification();
  }, []);

  return { notify };
};

//  ALL NOTIFICATION
export const useAllNotification = () => {
  const [notification, setNotification] = useState([]);
  const [loadSpinner, setLoadSpinner] = useState(true);
  const [refetch, setRefetch] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function get_notifications() {
      const token = await getToken();
      fetch(`${mainURL}/api/v1/user/notification/all`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setNotification(data?.data?.newPosts);
          setLoadSpinner(false);
        })
        .catch((err) => {
          setError(err);
        });
    }
    get_notifications();
  }, [refetch]);
  return { notification, loadSpinner, setRefetch };
};

// update notification

export const useUpdateNotifacation = () => {
  const updateNotificationStatusById = async (id) => {
    const token = await getToken();
    const res = await fetch(
      `${mainURL}/api/v1/user/notification/readed/${id}`,
      {
        method: "put",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    return await res.json();
  };
  return { updateNotificationStatusById };
};

// QUERY COUPON
export const useQueryCoupon = (name, type) => {
  const [couponData, setCouponData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `${mainURL}/api/v1/post/?storeName=${name}&postType=${type}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCouponData(data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { couponData, error, isLoading };
};

// ALL COUPON
export const useAllcoupon = () => {
  const [allData, setAllData] = useState([]);
  const [loadData, setLoadData] = useState(true);
  const [error, setError] = useState(null);
  // const [country, setCountry] = useState('')
  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("couponCountry");
      return userCountry;
    };
    const getApi = async () => {
      const url = `${mainURL}/api/v1/post?country=${await getCountry()}`;
      fetch(`${url}`)
        .then((response) => response.json())
        .then((data) => {
          setAllData(data?.data);
          setLoadData(false);
        })
        .catch((err) => {
          setError(err);
        });
    };
    getApi();
  }, []);

  return { allData, loadData, error };
};

// FOR CAROUSEL
export const useCarousel = () => {
  const [carousels, setCarousels] = useState([]);
  useEffect(() => {
    fetch(`${mainURL}/api/v1/carousel/?country=ksa`)
      .then((res) => res.json())
      .then((data) => {
        setCarousels(data?.data?.carousel);
      });
  }, []);
  return { carousels };
};

//Get FAVOURITE STORE FROM FAVOURITE API
export const useFavouriteStore = () => {
  const [favouriteData, setFavouriteData] = useState([]);
  const [error, setError] = useState(null);
  const [loadData, setLoadData] = useState(true);
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    async function noti() {
      const token = await getToken();
      fetch(`${mainURL}/api/v1/user/favourite/store`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((fvData) => {
          setFavouriteData(fvData?.result?.favourite?.stores);
          setLoadData(false);
        })
        .catch((err) => {
          setError(err);
        });
    }
    noti();
  }, [refetch]);
  return { favouriteData, error, loadData, setRefetch };
};

// get favourite post

export const useFavourtePost = () => {
  const [favouritePost, setFavouritePost] = useState([]);

  useEffect(() => {
    async function get_F_data() {
      const token = await getToken();
      fetch(`${mainURL}/api/v1/user/favourite/post`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    }
    get_F_data();
  }, []);
  return { favouritePost };
};

// update a favourite item
export const useFvStoreData = () => {
  const fvStoreData = async (fvitem) => {
    const token = await getToken();
    fetch(`${mainURL}/api/v1/user/favourite/store/${fvitem?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  };
  return { fvStoreData };
};

// Get use details for my profile component

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [refetch, setRefetch] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function UData() {
      const token = await getToken();
      try {
        const response = await fetch(`${mainURL}/api/v1/user/me`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        setUserInfo(result?.data);
      } catch {
        (err) => err;
      }
    }
    UData();
  }, [refetch]);
  return { userInfo, setRefetch, error };
};

// update user info from my profile
export const useUpdateUserInfo = () => {
  async function updateInfo(payload) {
    const token = await getToken();
    fetch(`${mainURL}/api/v1/user/me`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
  return { updateInfo };
};

// sign up for new user
export const useSignUp = () => {
  const signUpNewUserData = async (payload) => {
    const res = await fetch(`${mainURL}/api/v1/user/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  };

  return { signUpNewUserData };
};

// login user
export const useLogin = () => {
  const loginUser = async (payload) => {
    const res = await fetch(`${mainURL}/api/v1/user/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  };
  return loginUser;
};

// get contact

export const useContact = () => {
  const [number, setNumber] = useState([]);
  useEffect(() => {
    fetch(`${mainURL}/api/v1/contact`)
      .then((res) => res.json())
      .then((data) => setNumber(data?.data?.contact?.contactNo, "from hooks"));
  });
  return { number };
};

// =======get favourite from local storage===========
export const useFavouriteFromLocalStorage = (type) => {
  const [favourites, setFavourites] = useState([]);
  const [refetch, setRefetch] = useState([]);
  useEffect(() => {
    const getFavouriteItems = async () => {
      const favourites = JSON.parse(await AsyncStorage.getItem("favorite"));
      setFavourites(favourites[type]);
    };
    getFavouriteItems();
  }, [refetch]);
  return { favourites, setRefetch };
};
// ==========get favourite stores using localStorage====

export const useFavouriteItemsFromApi = () => {
  const { favourites: favouriteItems } = useFavouriteFromLocalStorage("stores");
  // const { getStoreById } = useGetStoreById();
  const [favouriteDatas, setFavouriteDatas] = useState([]);

  useEffect(() => {
    const getFavouriteItems = async () => {
      setFavouriteDatas(
        favouriteItems?.map((favouriteItemId) =>
          fetch(`${mainURL}/api/v1/store/${favouriteItemId}`)
            .then((res) => res.json())
            .then((data) => {
              return data?.data;
            })
            .catch((e) => e)
        )
      );
    };
    getFavouriteItems();
  }, [favouriteItems]);

  return { favouriteDatas };
};





