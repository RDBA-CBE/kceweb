import instance from "./axios.util";

const Common = {
  data: (slug: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = `${slug}`;
      instance()
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response.message);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },
};

export default Common;
