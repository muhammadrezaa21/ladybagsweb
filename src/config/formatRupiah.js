export const formatRupiah = (value) => {
  let value_string = value.toString();
  let sisa = value_string.length % 3;
  let rupiah = value_string.substr(0, sisa);
  let ribuan = value_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    let separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }
  return rupiah;
};
