const formatAddress = (address) => {
  let addressFormatted;
  if (address) {
    addressFormatted = address.slice(0, -16);
  }
  return addressFormatted;
};

export default formatAddress;
