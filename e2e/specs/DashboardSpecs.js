const Hero = require('./../steps/Hero').Hero;
const Dashboard = require('./../steps/Dashboard').Dashboard;

describe('Dashboard specs test suite', () => {

  fit('Can search for newly added hero on Dashboard page', () => {
    let hero = new Hero('newTestHero').create();

    let dashboard = new Dashboard()
      .openFromTopNavigation()
      .searchForHero(hero.heroName);

    dashboard.verifyHeroIsFound(hero.heroName);
  });

  it('Can create new Hero', () => {
    let hero = new Hero('newTestHero').create();
    hero.verifyHeroCreated();
  });

});
