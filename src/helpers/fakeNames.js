import { faker } from "@faker-js/faker";
export const Users = [];

faker.seed(248);
export const createRandomName = () => {
  return {
    id: faker.datatype.uuid(),
    userName: faker.name.fullName(),
  };
};

Array.from({ length: 100 }).forEach(() => Users.push(createRandomName()));
