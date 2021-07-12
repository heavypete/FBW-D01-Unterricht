//?  For Each opens a world of new opportunities. 

const fussballTeams = ['England', 'Italy', 'Spain', 'Denmark'];


fussballTeams.forEach(fussballTeam => console.log(`${fussballTeam}: "Will we win?"`));

// fussballTeams.forEach(fussballTeam => {
//     console.log(`${fussballTeam}: "Will we win? "`);
// })

const sayWeWon = function (team) {
    console.log(`${team}: "We Won!"`);

};

const sayWeLost = team => console.log(`${team}: "We Lost!`);

fussballTeams.forEach(sayWeWon);
fussballTeams.forEach(sayWeLost);
sayWeWon('Switzerland');

const nums = [1, 2, 3];

// for
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// for-of
for (const num of nums) {
    console.log(num);
}