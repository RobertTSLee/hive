import { HivePage } from './app.po';

describe('hive App', () => {
  let page: HivePage;

  beforeEach(() => {
    page = new HivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
