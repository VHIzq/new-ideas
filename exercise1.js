const data = [
  {
    unitNumber: 12121,
    dieselEngine: [
      {
        date: "2023-01-05",
        condition: "severe",
        problemCode: "wear",
      },
      {
        date: "2021-12-11",
        condition: "normal",
        problemCode: "dirt",
      },
      {
        date: "2019-12-11",
        condition: "abnormal",
        problemCode: "dirtr",
      },
    ],
    transmission: [
      {
        date: "2019-11-06",
        condition: "abnormal",
        problemCode: "dirt",
      },
      {
        date: "2018-01-10",
        condition: "normal",
        problemCode: "none",
      },
      {
        date: "2017-02-11",
        condition: "caution",
        problemCode: "wear",
      },
    ],
    powerEnd: [
      {
        date: "2018-04-07",
        condition: "caution",
        problemCode: "none",
      },
      {
        date: "2018-01-10",
        condition: "severe",
        problemCode: "dry",
      },
      {
        date: "2015-02-11",
        condition: "abnormal",
        problemCode: "dry",
      },
    ],
  },
];

const mappedData = data.map((item) => {
  return {
    row: {
      unitNumber: item.unitNumber,
      dateEngine: item.dieselEngine.map((engine) => engine.date),
      conditionEngine: item.dieselEngine.map((engine) => engine.condition),
      problemCodeEngine: item.dieselEngine.map((engine) => engine.problemCode),
      dateTransmission: item.transmission.map((transmission) => transmission.date),
      conditionTransmission: item.transmission.map((transmission) => transmission.condition),
      problemCodeTransmission: item.transmission.map((transmission) => transmission.problemCode),
      datePowerEnd: item.powerEnd.map((powerEnd) => powerEnd.date),
      conditionPowerEnd: item.powerEnd.map((powerEnd) => powerEnd.condition),
      problemCodePowerEnd: item.powerEnd.map((powerEnd) => powerEnd.problemCode),
    },
  };
});

console.log(mappedData);





