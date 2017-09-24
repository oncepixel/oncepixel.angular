import { Oncepixel.AngularPage } from './app.po';

describe('oncepixel.angular App', () => {
  let page: Oncepixel.AngularPage;

  beforeEach(() => {
    page = new Oncepixel.AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
