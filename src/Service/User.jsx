import config from "./Config/Config"

export async function getUserDetail() {
    let products = new Promise((resolve, reject) => {
      fetch(config.apiUrl.edit_me, config.head)
        .then((response) => {
          resolve(response.json());
        })
        .catch((reject) => console.log(reject));
    });
    return products;
  }