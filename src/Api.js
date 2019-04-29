// alert("API");

class Api {
  async get(url) {
    const req = await fetch(url);
    const res = await req.json();
    return res;
  }

  async post(url, data) {
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const res = await req.json();
    return res;
  }

  async patch(url, data) {
    const req = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const res = await req.json();
    return res;
  }

  async delete(url, data) {
    const req = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const res = await req.json();
    return res;
  }
}
