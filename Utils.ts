// Source: https://stackoverflow.com/questions/5933565/how-to-create-initialize-the-file-object-using-file-path-html5
export const getFileBlob = function (url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.addEventListener("load", function () {
    cb(xhr.response);
  });
  xhr.send();
};

export function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const blobToFile = function (blob, name) {
  blob.lastModifiedDate = new Date();
  blob.name = name;
  return blob;
};

export const getFileObject = function (filePathOrUrl, cb) {
  getFileBlob(filePathOrUrl, function (blob) {
    cb(blobToFile(blob, "test.jpg"));
  });
};

export const getFileObjectAsync = async function (filePathOrUrl: string) {
  return new Promise((resolve, reject) => {
    try {
      getFileBlob(filePathOrUrl, function (blob) {
        resolve(blobToFile(blob, "test.jpg"));
      });
    } catch (error) {
      reject(error);
    }
  });
};
