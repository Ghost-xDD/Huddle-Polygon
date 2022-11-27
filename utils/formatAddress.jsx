const formatAddress = (address) => {
  let addressFormatted;
  if (address) {
    addressFormatted = address.slice(0, -10);
  }
  return addressFormatted;
};

export default formatAddress;
