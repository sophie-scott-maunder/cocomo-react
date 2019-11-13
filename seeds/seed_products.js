
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Products').del()
    .then(function () {
      // Inserts seed entries
      return knex('Products').insert([
        {
          id: 1,
          name: 'Chocolate Salami',
          price: '25',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
          ingredients: 'Chocolate, nuts, cherries.',
          weight: '30gs',
          date_available: '20th of December',
          in_stock: true,
        },
        { id: 2, 
          name: 'Chocolate Covered Grapefruit Peel',
          price: '20',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
          ingredients: 'Chocolate, nuts, cherries.',
          weight: '30gs',
          date_available: '20th of December',
          in_stock: false,
         },
        { id: 3, 
          name: 'Wedding Favours',
          price: '20',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
          ingredients: 'Chocolate, nuts, cherries.',
          weight: '30gs',
          date_available: '20th of December',
          in_stock: false,  
        }
      ]);
    });
};
