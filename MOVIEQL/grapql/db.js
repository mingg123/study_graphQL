export const people = [
  {
    id: 0,
    name: "minji",
    age: 18,
    gender: "male",
  },
  {
    id: 1,
    name: "Daal",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "JD",
    age: 18,
    gender: "male",
  },
  {
    id: 3,
    name: "moodaddi",
    age: 18,
    gender: "male",
  },
  {
    id: 4,
    name: "flynn",
    age: 18,
    gender: "male",
  },
  {
    id: 5,
    name: "minji",
    age: 18,
    gender: "male",
  },
];

export const getById = (id) => {
  const filterdPeople = people.filter((person) => id === person.id);
  return filterdPeople[0];
};
