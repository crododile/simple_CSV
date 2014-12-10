describe("SimpleCSV", function() {
  it("sets permitted columns", function() {
    loadFixtures('import-page.html');
    window.SimpleCSV.set_valid_columns();
    expect(window.SimpleCSV.valid_columns()).toEqual(['first_name','last_name']);
  });
});