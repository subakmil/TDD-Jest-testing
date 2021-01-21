function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!inputArr) throw Error("inpuAtt cannot be empty");

  const regex = new RegExp(searchTerm, "i");

  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex);
  });
}

module.exports = filterByTerm;
