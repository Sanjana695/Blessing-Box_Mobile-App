const APICallHandler = async (
  endpoint,
  body,
  method,
  returnType = "",
  token = ""
) => {
  try {
    const response = await fetch(`http://192.168.10.3:8080/${endpoint}`, {
      method, //GET, POST, PUT, DELETE
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body,
    });

    let responseText = "";

    if (response) {
      const { status } = response;
      if (status != 200 || returnType == "TEXT") {
        responseText = await response.json();
      } else {
        responseText = response.json();
      }
    }

    return responseText;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export default APICallHandler;
