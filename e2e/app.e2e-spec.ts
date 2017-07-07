import { StarWarsTourPage } from './app.po';

describe('star-wars-tour App', () => {
  let page: StarWarsTourPage;

  beforeEach(() => {
    page = new StarWarsTourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
