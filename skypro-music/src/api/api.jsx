const baseURL = ' https://skypro-music-api.skyeng.tech';

export async function getAllTracks(){
    const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/")
    if(!response.ok) {
        throw new Error ("Ошибка сервера")
    }
    console.log(baseURL)
    const data = await response.json()
    return data
}

export async function signIn({email, password}){
    const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          username: email,
        }),
        headers: {
          // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
          "content-type": "application/json",
        },
      })
      if (response.status === 500) {
        throw new Error("Сервер не отвечает")
      }
      const user = await response.json();
      return user
}