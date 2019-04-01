function Api() {
  this.api = new Api();
}

Api.prototype.get = async function(url) {
  const req = await fetch(url);
  const res = await req.json();
  return res;
};

Api.prototype.post = async function(url, data) {
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const res = await req.json();
  return res;
};

Api.prototype.patch = async function(url, data) {
  const req = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const res = await req.json();
  return res;
};

Api.prototype.delete = async function(url, data) {
  const req = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const res = await req.json();
  return res;
};
