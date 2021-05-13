// Перепиши функцию toggleUserState() так,
//  чтобы она не использовала callback-функцию callback,
//   а принимала всего два параметра allUsers и userName и возвращала промис.
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  // const toggleUserState = (allUsers, userName, callback) => {
  //   const updatedUsers = allUsers.map(user =>
  //     user.name === userName ? { ...user, active: !user.active } : user,
  //   );
  
  //   callback(updatedUsers);
  // };
  
  // const logger2 = updatedUsers => console.table(updatedUsers);
  
  // /*
  //  * Сейчас работает так
  //  */
  // toggleUserState(users, 'Mango', logger2);
  // toggleUserState(users, 'Lux', logger2);
  
  const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
      const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
    ); 
    resolve(updatedUsers);
  }); 
  };
 
  //  * Должно работать 
  //  */
  toggleUserState(users, 'Mango').then(logger2);
  toggleUserState(users, 'Lux').then(logger2);