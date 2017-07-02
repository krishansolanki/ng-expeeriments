import { NgExperimentsPage } from './app.po';

describe('ng-experiments App', () => {
  let page: NgExperimentsPage;

  beforeEach(() => {
    page = new NgExperimentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
