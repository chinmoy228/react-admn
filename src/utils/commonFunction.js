export function hexTohsl(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  r = r / 255;
  g = g / 255;
  b = b / 255;

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h = (max + min) / 2;

  if (max === min) {
    h = 0; // achromatic
  } else {
    var d = max - min;
    // s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }

  // l = l * 100;
  // l = Math.round(l);
  h = Math.round(360 * h);

  // let colorInHSL = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  return h;
}

export function bColor(length, hlsaVal) {
  let x = 0;
  let y = 100;
  let value = 95 / length;
  let color = [];
  for (let i = 0; i < length; i++) {
    x = x + value;
    y = y - value;
    color.push(
      "hsl(" + hlsaVal + ", " + parseInt(x) + "%, " + parseInt(y) + "%)"
    );
    // color.push({ x: parseInt(x), y: parseInt(y) })
  }
  return color;
}

export const formatter = (item) => {
  return ` $ ${item}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatterPrice = (item) => {
  return `${item}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 8) {
    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`;
  }
  if (phoneNumberLength < 12) {
    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
      4,
      8
    )} ${phoneNumber.slice(8, 12)}`;
  }
  return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
    4,
    8
  )} ${phoneNumber.slice(8, 12)} ${phoneNumber.slice(12, 16)}`;
}

export function formatExpireDate(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 2) return phoneNumber;
  return `${phoneNumber.slice(0, 2)}/${phoneNumber.slice(2, 4)}`;
}

export function formatCvv(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  return `${phoneNumber.slice(0, 4)}`;
}
export const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (!date) return "";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  return day + " " + month;
};
