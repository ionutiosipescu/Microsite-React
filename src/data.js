export const arrQualities = [
  {
    id: 1,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4149/4149656.png",
    sectionTitle: "Quality Eficiency Improvement",
    sectionDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a",
  },
  {
    id: 2,
    iconUrl:
      "https://cdn-icons.flaticon.com/png/512/307/premium/307107.png?token=exp=1656422819~hmac=1095675feff21d05d0052434e7a7b20b",
    sectionTitle: "Quality Eficiency Improvement",
    sectionDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a",
  },
  {
    id: 3,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/419/419158.png",
    sectionTitle: "Quality Eficiency Improvement",
    sectionDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a",
  },
  {
    id: 4,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/419/419223.png",
    sectionTitle: "Quality Eficiency Improvement",
    sectionDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a",
  },
  {
    id: 5,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4149/4149656.png",
    sectionTitle: "Quality Eficiency Improvement",
    sectionDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a",
  },
  {
    id: 6,
    iconUrl:
      "https://cdn-icons.flaticon.com/png/512/307/premium/307107.png?token=exp=1656422819~hmac=1095675feff21d05d0052434e7a7b20b",
    sectionTitle: "Quality Eficiency Improvement",
    sectionDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a",
  },
  {
    id: 7,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/419/419158.png",
    sectionTitle: "Quality Eficiency Improvement",
    sectionDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a",
  },
  {
    id: 8,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/419/419223.png",
    sectionTitle: "Quality Eficiency Improvement",
    sectionDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a",
  },
];

export const arr2 = [
  {
    id: 1,
    author: "Raymond Berlglund1",
    authorPosition: "Managing Director with A&M's Health Care & Life Sciences",
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 2,
    author: "Raymond Berlglund",
    authorPosition: "Managing Director with A&M's Health Care & Life Sciences",
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 3,
    author: "Raymond Berlglund",
    authorPosition: "Managing Director with A&M's Health Care & Life Sciences",
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 4,
    author: "Raymond Berlglund",
    authorPosition: "Managing Director with A&M's Health Care & Life Sciences",
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
];

function timeConversion(s) {
  // Write your code here
  let hours = s.substr(0, 2);
  let minutes = s.substr(3, 2);
  let seconds = s.substr(-4, 2);
  let modifier = s.substr(-2, 2);
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
  let time = `${hours}:${minutes}:${seconds}`;
  return time;
}
