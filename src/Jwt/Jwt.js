
let token
if (typeof window !== "undefined") {
    token=JSON.parse(localStorage.getItem("cnnUserToken"))
  }
export const authUrl={
    headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
}

export const pk=1