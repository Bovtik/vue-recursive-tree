const getCityById = function getCityById (cityId) {
  switch (cityId) {
    case 1:
      return 'Киев';
      break;
    case 2:
      return 'Харьков';
      break;
    default:
      return false;
      break;
  }
}

module.exports = getCityById